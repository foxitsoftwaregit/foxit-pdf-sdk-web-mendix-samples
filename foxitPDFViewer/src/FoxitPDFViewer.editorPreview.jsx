import { Component, createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
import PDFViewer from "./components/PDFViewer";

export class preview extends Component {
    render() {
        // return <HelloWorldSample sampleText={this.props.sampleText} />;
        return <PDFViewer {...this.props} />;
    }
}

export function getPreviewCss() {
    return require("./ui/FoxitPDFViewer.css");
}
