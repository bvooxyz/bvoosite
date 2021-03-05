function doc1() {
    setDoc("https://docs.google.com/document/d/e/2PACX-1vS1TbUMVhu-L6dWQ9VY-YE0iTkJU13E5Ox02RTQqHdjq1ksIudhbeGLF5b7_Xcz1blQioII5DQ42RCN/pub?embedded=true");
}
function doc2() {
    setDoc("https://docs.google.com/document/d/e/2PACX-1vSWvKTmhDu8nPAXRJSdls8HnK69dwPJoI6GNSEub3lNcBEGCPwV3nWbx4HqRzdZyXifdM4Mi_p61vLu/pub?embedded=true");
}
function doc3() {
    setDoc("https://docs.google.com/document/d/e/2PACX-1vTKZdRBRW5_elD359WM1G0z880atBSdnWk-qY-GW1B57FhqrMXyvvq4eWJFG8NoHMNTE1Nfx0GRguvu/pub?embedded=true");
}
function doc4() {
    setDoc("https://docs.google.com/document/d/e/2PACX-1vRkE84_e8rbI0iZoQqUcujf62j-KaLV6ETGVtyLOfFowduBrDuouppkfo27UcMcIIEgKvjfuaTdY-dX/pub?embedded=true");
}
function doc5() {
    setDoc("https://docs.google.com/document/d/e/2PACX-1vQSnK5EMRNbTWTEB05OEF0XfIvSWW3yxr0WgXXDX7Z90PpYD2yP-wQmtVv_B5p3leHNlXlS1mepONyY/pub?embedded=true");
}

function setDoc(src) {
    document.getElementsByClassName('doc-container')[0].innerHTML = '<iframe id="doc-frame" src="" ></iframe>';
    document.getElementById('doc-frame').src = src;
    deframe();
}