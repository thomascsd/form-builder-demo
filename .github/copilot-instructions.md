# Form Builder Demo - AI Coding Agent Instructions

## Project Overview

Angular form validation demo using `class-validator` decorators on model classes, with Netlify Functions proxy for API calls. Uses TypeScript strict mode with custom utility types for type-safe reactive forms.

## Architecture & Key Patterns

### Type-Safe Forms Pattern

- **Model-First Forms**: Define validation rules on model classes (e.g., [src/shared/models/member.ts](src/shared/models/member.ts)) using `class-validator` decorators
- **ToForm Utility**: Use [src/app/utils/toForm.ts](src/app/utils/toForm.ts) type helper to create strongly-typed FormGroup from model classes
  ```typescript
  group!: FormGroup<ToForm<Member>>;  // NOT UntypedFormGroup
  ```
- **Custom Validator**: [src/app/utils/validator.ts](src/app/utils/validator.ts) bridges `class-validator` with Angular's `ValidatorFn`
  ```typescript
  name: new FormControl('', utilValidator(new Member(), 'name'));
  ```

### Data Models

- All models extend [src/shared/models/baseModel.ts](src/shared/models/baseModel.ts) with optional `id` property
- Models use `class-transformer`'s `plainToClassFromExist` in constructors
- Validation messages in Traditional Chinese (zh-TW)

### Service Layer Pattern

- Services use Angular 20's new `httpResource` (not HttpClient) - see [src/app/core/services/member.service.ts](src/app/core/services/member.service.ts)
- Returns `HttpResourceRef<T>` instead of Observables
- All HTTP calls route through Netlify Function proxy at `/.netlify/functions/proxy`

### Netlify Functions Integration

- [functions/proxy.ts](functions/proxy.ts) forwards API requests with `x-api-key` header from env vars
- Requires `API_URL` and `API_KEY` in `functions/.env` (not tracked in git)
- Path passed via query param: `?path=/contact/list`

## Path Aliases (tsconfig.json)

```typescript
import { Member } from '@shared/models';       // src/shared/models
import { MemberService } from '@core/services'; // src/app/core/services
import { utilValidator } from '@utils/validator'; // src/app/utils
import ... from '@app/*';                       // src/app/
```

## Component Structure

- **No standalone components** (all declared in [src/app/app.module.ts](src/app/app.module.ts))
- Layout uses nested routing: LayoutComponent wraps member/list/order child routes
- Third-party: `@ng-select/ng-select` for dropdowns (e.g., county/district in OrderComponent)

## Development Commands

```bash
npm start          # Standard ng serve
npm run dev        # Netlify dev (with functions)
npm run dev:client # ng serve with proxy.conf.json (for local API testing)
npm run build      # Production build → dist/browser
npm test           # Karma/Jasmine tests
```

## Key Differences from Standard Angular

1. **Always use `ToForm<T>` type** for FormGroups with model classes, not `UntypedFormGroup`
2. **httpResource instead of HttpClient** - returns `HttpResourceRef<T>` (Angular 20 feature)
3. **class-validator decorators drive validation** - don't manually write Angular Validators
4. **All API calls proxy through Netlify Function** - never call external APIs directly from client

## Common Tasks

### Adding a New Form

1. Create model class in `src/shared/models/` extending BaseModel
2. Add validation decorators from `class-validator`
3. Create component with `FormGroup<ToForm<YourModel>>`
4. Use `utilValidator(new YourModel(), 'propertyName')` for each FormControl

### Adding API Endpoint

Update [src/app/core/services/member.service.ts](src/app/core/services/member.service.ts) pattern:

```typescript
const params = { path: '/your-endpoint' };
return httpResource<YourType>(() => ({ url: API_BASE_URL, params }));
```

### Working with Nested Forms

Refer to [src/app/order/order.component.ts](src/app/order/order.component.ts) for cascading dropdowns (county → district selection).
