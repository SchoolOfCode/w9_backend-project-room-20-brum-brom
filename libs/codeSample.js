
export const codeData= [{
    title: 'Circle',
   description: 'Creates a circle shape with pure CSS.',
    html: '<div class="circle"></div>',
    css: `.circle {
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      background: #333;
    }`,
    javascript: null },

   {
    title:`Gradient text`,
    description: `Gives text a gradient color.`,
    html: `<p class="gradient-text">Gradient text</p>`,
    css: `.gradient-text {
      background: -webkit-linear-gradient(pink, red);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
    `,
    javascript:null
 },
    {title: `Hairline border`,
    description: `Gives an element a border equal to 1 native device pixel in width, which can look very sharp and crisp.`,
    html: `<div class="hairline-border">text</div>`,
    css:
    `.hairline-border {
      box-shadow: 0 0 0 1px;
    }
    @media (min-resolution: 2dppx) {
      .hairline-border {
        box-shadow: 0 0 0 0.5px;
      }
    }
    @media (min-resolution: 3dppx) {
      .hairline-border {
        box-shadow: 0 0 0 0.33333333px;
      }
    }
    @media (min-resolution: 4dppx) {
      .hairline-border {
        box-shadow: 0 0 0 0.25px;
      }
    }`,
    javascript:null },

    {title: `isBoolean`,
    description: `Checks if the given argument is a native boolean element.
    Use typeof to check if a value is classified as a boolean primitive.`,
    Html: null,
    css:null ,
    Javascript: `const isBoolean = val => typeof val === 'boolean';
    isBoolean(null); // false
    isBoolean(false); // true`
     }
    ]