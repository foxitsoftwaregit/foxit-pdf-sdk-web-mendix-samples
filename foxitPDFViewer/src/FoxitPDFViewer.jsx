import { Component, createElement } from "react";

// import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/FoxitPDFViewer.css";
import PDFViewer from "./components/PDFViewer";

export class FoxitPDFViewer extends Component {
    render() {
        // return <HelloWorldSample sampleText={this.props.sampleText} />;
        return <PDFViewer {...this.props} />;
    }
}
