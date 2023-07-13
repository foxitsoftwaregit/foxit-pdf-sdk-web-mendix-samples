import { createElement, useRef, useEffect, useState } from "react";

import loadStyleLink from "../shared/loadStyleLink";

const libPath = "/resources/@foxitsoftware/foxit-pdf-sdk-for-web-library/lib/";
export default function PDFViewer(props) {
  loadStyleLink(libPath + 'PDFViewCtrl.css');

  const viewerRef = useRef(null);
  const [_PDFViewCtrl, setPDFViewCtrl] = useState(null);
  const [viewer, setViewer] = useState(null);

  useEffect(() => {
    if (window.PDFViewCtrl) {
      return;
    }

    window.dojoDynamicRequire([libPath + 'PDFViewCtrl.full.js'], function (PDFViewCtrl) {
      setPDFViewCtrl(PDFViewCtrl);
    })
  })

  useEffect(() => {
    if (!_PDFViewCtrl || !viewerRef.current || viewer) {
      return;
    }

    const ePdfViewer = viewerRef.current;
    const pdfViewer = new _PDFViewCtrl.PDFViewer({
      libPath: libPath,
      jr: {
        licenseSN: props.licenseSN,
        licenseKey: props.licenseKey,
        l: props.l,
      },
      customs: {
        ScrollWrap: _PDFViewCtrl.CustomScrollWrap.create(ePdfViewer)
      }
    });

    pdfViewer.init(ePdfViewer);

    setViewer(pdfViewer);
  });

  useEffect(() => {
    if (!viewer) {
      return;
    }

    if (props.fileUrl) {
      viewer.openPDFByHttpRangeRequest({
        range: {
            url: props.fileUrl,
        }
      })
    } else if (props.file) {
      viewer.openPDFByFile(props.file);
    }
  }, [viewer, props.fileUrl, props.file]);

  window.onresize = function () {
    if (viewer) {
      viewer.redraw();
    }
  }

  // return (createElement("div", { style: { overflow: "auto", height: props.height }, ref: viewerRef }));
  return (
      <div style={{ overflow: "auto", height: props.height }}
          ref={viewerRef}
      ></div>
  );
}