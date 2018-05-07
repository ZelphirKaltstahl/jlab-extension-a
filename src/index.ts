// =======
// IMPORTS
// =======
import {
    JupyterLab,
    JupyterLabPlugin
} from "@jupyterlab/application";

import {
  Widget
} from "@phosphor/widgets";

// =========
// EXTENSION
// =========
function activate(app: JupyterLab): void {

}

export class ClassA extends Widget {
    constructor(options: Widget.IOptions = {}) {
        super(options);
    }
}

// ========
// FINALIZE
// ========
const extension: JupyterLabPlugin<void> = {
    id: "sf-jupyterlab/extension-a",
    requires: [],
    autoStart: true,
    activate: activate
};
export default extension;
