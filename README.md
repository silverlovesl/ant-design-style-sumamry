# Build

use npm:

```bash
npm run start
```

use yarn:

```bash
yarn start
```

# Spacing

[Ref Quasar Framework](https://quasar-framework.org/components/spacing.html)

```css
g-[m|p][a|t|r|b|l|x|y]-[xxs|xs|sm|md|lg|xl|xxl]
    T        D                  S

T - type
  - values: p (padding), m (margin)

D - direction
  - values:
      t (top), r (right), b (bottom), l (left),
      a (all), x (both left & right), y (both top & bottom)

S - size
  - values:
      none: 0rem
      xss:  0.25rem (extra extra small),
      xs:   0.5rem  (extra small),
      sm:   1rem    (small),
      md:   1.5rem  (medium),
      lg:   2rem    (large),
      xl:   2.5rem  (extra large)
      xxl:  3rem    (extra extra large)

```

## example

```html
html { font-size: 16px; }

<!-- margin-left: 16px; -->
<div class="g-ml-sm">content</div>

<!-- padding-top: 32px; -->
<div class="g-pt-lg">content</div>

<!-- { margin-left: 16px; margin-right: 16px; padding-top: 32px; padding-bottom: 32px; } -->
<div class="g-mx-sm g-py-lg">Content</div>
```

# Color

[And design color](https://ant.design/docs/spec/colors)

> ## status color

- ![#1890FF](https://placehold.it/15/1890FF/000000?text=+) `#1890FF Primary`
- ![#13C2C2](https://placehold.it/15/13C2C2/000000?text=+) `#13C2C2 Info`
- ![#52C418](https://placehold.it/15/52C418/000000?text=+) `#52C418 Success`
- ![#FAAD14](https://placehold.it/15/FAAD14/000000?text=+) `#FAAD14 Warn`
- ![#F5222C](https://placehold.it/15/F5222C/000000?text=+) `#FAAD14 Danger`

> ## Text color

- ![#FFFFFF](https://placehold.it/15/FFFFFF/000000?text=+) `#FFFFFF gray-0`
- ![#FAFAFA](https://placehold.it/15/FAFAFA/000000?text=+) `#FAFAFA gray-1`
- ![#F5F5F5](https://placehold.it/15/F5F5F5/000000?text=+) `#F5F5F5 gray-2`
- ![#E8E8E8](https://placehold.it/15/E8E8E8/000000?text=+) `#E8E8E8 gray-3`
- ![#D9D9D9](https://placehold.it/15/D9D9D9/000000?text=+) `#D9D9D9 gray-4`
- ![#BFBFBF](https://placehold.it/15/BFBFBF/000000?text=+) `#BFBFBF gray-5`
- ![#8C8C8C](https://placehold.it/15/8C8C8C/000000?text=+) `#8C8C8C gray-6`
- ![#595959](https://placehold.it/15/595959/000000?text=+) `#595959 gray-7`
- ![#262626](https://placehold.it/15/262626/000000?text=+) `#262626 gray-8`
- ![#000000](https://placehold.it/15/000000/000000?text=+) `#000000 gray-9`

> ## Front color prefix <b style="color:">fc-</span>

```css
.fc-primary
.fc-info
.fc-success
.fc-warn
.fc-danger


.fc-gray-0
.
.
.
.fc-gray-9
```

> ## Force front color prefix <b style="color:">force-fc-</span>
```css
.force-fc-primary
{
  color:#1890FF !important;
}
```

> ## Background color prefix  <b style="color:">bc-</span>

```css
.bc-primary
.bc-info
.bc-success
.bc-warn
.bc-danger
```

# Width & Height

```css
.g-full {
  width: 100%;
  height: 100%;
}
.g-full-width {
  width: 100%;
}
.g-full-height {
  height: 100%;
} /* The parent element shoud have absolute height*/
```

# Display
```css
.g-dis-[block|inline|inline-block|flex|inline-flex]

.g-dis-block { display:block; }
.g-dis-inline { display:inline; }
.g-dis-inline-block { display:inline-block; }
.g-dis-flex { display:flex; }
.g-dis-inline-flex { display:inline-flex; }
```

# Typography

## Alignment
```css
.g-text-[left|center|right|justify]
.g-text-left { text-align:left; }
.g-text-center { text-align:center; }
.g-text-right { text-align:right; }
.g-text-justify { text-align:right; }
```

## case
```css
.g-text-[uppercase|lowercase|capitalize]
.g-text-uppercase { text-transform: uppercase; }
.g-text-lowercase { text-transform: lowercase; }
.g-text-capitalize { text-transform: capitalize; }
```

## Flex space
```css
.g-flex-space-[between|around|envenly]
.g-flex-space-between { justify-content: space-between; }
.g-flex-space-around { justify-content: space-between; }
.g-flex-space-envenly { justify-content: space-between; }
```

## Wrap
```css
.g-no-wrap { white-space: nowrap; }
```

## Border
```css
.g-fw-[bold|border]
.g-fw-bold { font-weight: bold; }
.g-fw-bolder { font-weight: bolder; }
```

## Font Size
Ref: https://ant.design/docs/spec/font
```css
.g-fs-12 ~ .g-fs-56

.g-fs-12 { font-size: 12px; line-height: 20px; }
.
.
.
.g-fs-56 { font-size: 56px; line-height: 76px; }
```

## Ellipsis
```css
.g-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```