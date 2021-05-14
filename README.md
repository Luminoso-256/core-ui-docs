# core-ui-docs
## WIP Documentation for Mojang's new UI system for Minecraft Bedrock and Beyond!


### FAQ

#### What is CoreUI?
CoreUI is a new UI and design system Mojang is building to replace JSON UI on bedrock, and to carry to other platforms. A talk given by a Mojang developer about this can be found [here](https://www.youtube.com/watch?v=qDevZETe8OE).

#### What is the CoreUI Tech Stack?

**In Bedrock Edition:**
- CoreUI screens themselves are made using ReactJS, with a system of Components.
- CoreUI is rendered in-game using [Coherent Labs Gameface](https://coherent-labs.com/products/coherent-gameface/)
- CoreUI communicates with underlying engine functionality through a system of `facets` and `feature flags`. See the Integration section for current knowledge on what flags and facets exist.

**In the Minecraft Launcher:**
- TODO

### Integration

**Key concepts:**

- `window.engine`: A way to get a hold of the underlying bedrock engine, on bedrock platforms. Rough documentation can be found [here](https://coherent-labs.com/Documentation/cpp-gameface/df/d01/javascript_virtual_machine.html)

**Facets:**

**Feature Flags:**

### Component List
**note: All Syntax here assumes appropriately deobfuscated names.**

**Button:**
Example Syntax: 
``` 
a.a.createElement(
 button,
 { delayedClick: true, onClick: yourFunctionHere(), gamepadIndex: 0, autofocus: true, inputLegend: "inputlegendtext", variant: "secondary", soundEffectPressed: "random.click" },
 "Secondary Button"
)
```
Properties:
- Delayed Click: TODO
- onClick: supply a function which is called when the button is clicked. If you're writing an inline function, use the () => {} syntax, or your JS will be ran as soon as the page loads
- inputLegend: defines the action name that shows up when the inputhint component is active
- variant: defines the style of the button. availablee options are `primary`,`secondary`,`destructive`,`default`, and `accordion`
- soundEffectPressed: the sound effect played when the button is clicked
- the "Secondary Button" text: the text that shows up on the button. Can also be another component theoretically.
- autofocus: needs testing
- gamepadIndex: needs testing

**Text:**
*coming soon*

### Tooling
- Todo once mapping/deob script works

### Contributing to the docs
Currently this is quite WIP, but contributions welcome! In time, this should expand into a proper set of documentation with pages, but for now, this is simpler.
