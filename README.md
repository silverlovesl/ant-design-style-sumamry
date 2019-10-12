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

<h2 style="color:#1890ff">■ #1890FF Primary</h2>  
<h2 style="color:#13c2c2">■ #13C2C2 Info</h2>
<h2 style="color:#52c418">■ #52C418 Success</h2>
<h2 style="color:#faad14">■ #FAAD14 Warn</h2>
<h2 style="color:#f5222c">■ #F5222C Danger</h2>

> ## Text color

<p style="color:#ffffff">■ #FFFFFF gray-0</p>
<p style="color:#fafafa">■ #FAFAFA gray-1</p>
<p style="color:#f5f5f5">■ #F5F5F5 gray-2</p>
<p style="color:#e8e8e8">■ #E8E8E8 gray-3</p>
<p style="color:#d9d9d9">■ #D9D9D9 gray-4</p>
<p style="color:#bfbfbf">■ #BFBFBF gray-5</p>
<p style="color:#8c8c8c">■ #8C8C8C gray-6</p>
<p style="color:#595959">■ #595959 gray-7</p>
<p style="color:#262626">■ #262626 gray-8</p>
<p style="color:#000000">■ #000000 gray-9</p>

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