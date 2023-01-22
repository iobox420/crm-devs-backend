const pathArray = [
  "M474.5,806.5v18l-86,43l-31-1l-38,18l-276-2l0.4-95l2.6,0l276-1l35-13l31,1l86-33V806.5z",
  "M474.5,732.5v9l-86,33l-31-1l-35,13l-276,1l-2.6,0l0.3-62.3l2.3,0l276-0.9l35-9.5l31,0.9l86-24.1V732.5z",
  "M474.5,685.2v6.4l-86,24.1l-31-0.9l-35,9.5l-276,0.9l-2.3,0l0.3-62.3l2,0l276-0.8l35-5.9l31,0.8l86-15.2V685.2z  ",
  "M474.5,637.8v3.9l-86,15.2l-31-0.8l-35,5.9l-276,0.8l-2,0l0.3-62.3l1.7,0l276-0.7l35-2.3l31,0.7l86-6.3V637.8z",
  "M717.5,646.2v32.3h-70l-10,5h-6l-10,3.8v-34.8l10-2.7v0.5l6,0.1l10-4.1H717.5z",
  "M717.5,613.8v32.3h-70l-10,4.1l-6-0.1v-0.5l-10,2.7v-34.8l10-1.7v0.9l6,0.2l10-3.2H717.5z",
  "M717.5,581.5v32.3h-70l-10,3.2l-6-0.2v-0.9l-10,1.7v-34.8l10-0.6v1.3l6,0.3l10-2.3H717.5z",
  "M717.5,549.2v32.3h-70l-10,2.3l-6-0.3v-1.3l-10,0.6V548l10,0.4v1.8l6,0.4l10-1.4H717.5z",
  "M717.5,516.8v32.3h-70l-10,1.4l-6-0.4v-1.8l-10-0.4v-34.8l10,1.5v2.2l6,0.6l10-0.6H717.5z",
  "M717.5,484.5v32.3h-70l-10,0.6l-6-0.6v-2.2l-10-1.5v-34.8l10,2.5v2.7l6,0.7l10,0.3H717.5z",
  "M717.5,452.2v32.3h-70l-10-0.3l-6-0.7v-2.7l-10-2.5v-34.8l10,3.6v3.1l6,0.8l10,1.2H717.5z",
  "M717.5,419.8v32.3h-70l-10-1.2l-6-0.8v-3.1l-10-3.6v-34.8l10,4.6v3.5l6,0.9l10,2.1H717.5z",
  "M717.5,386.5v33.3h-70l-10-2.1l-6-0.9v-3.5l-10-4.6v-35.8l10,5.7v4l6,1l10,3H717.5z",
  "M474.5,590.5v1.3l-86,6.3l-31-0.7l-35,2.3l-276,0.7l-1.7,0l0.3-62.3l1.4,0l276-0.6l35,1.2l31,0.6l86,2.5v1.2  V590.5z",
  "M474.5,492.1v3.8v46.1l-86-2.5l-31-0.6l-35-1.2l-276,0.6l-1.4,0l0.3-62.3l1.1,0l276-0.4l35,4.8l31,0.4  L474.5,492.1z",
  "M474.5,442.2v6.3v43.6l-86-11.5l-31-0.4l-35-4.8l-276,0.4l-1.1,0l0.3-62.3h0.9l276-0.3l35,8.3l31,0.3  L474.5,442.2z",
  "M474.5,392.3v8.9v41l-86-20.3l-31-0.3l-35-8.3l-276,0.3h-0.9l0.3-62.3h0.6l276-0.2l35,11.9l31,0.2L474.5,392.3z  ",
  "M474.5,342.4v11.4v38.5l-86-29.2l-31-0.2l-35-11.9l-276,0.2h-0.6l0.3-62.3h0.3l276-0.1l35,15.5l31,0.1  L474.5,342.4z",
  "M474.5,291.5v14v36.9l-86-38.1l-31-0.1l-35-15.5l-276,0.1h-0.3l0.3-63.3h276l35,19h31L474.5,291.5z",
  "M964.5,678.5v49h-247v-49H964.5z",
  "M964.5,646.2v32.3h-247v-32.3H964.5z",
  "M964.5,613.8v32.3h-247v-32.3H964.5z",
  "M964.5,581.5v32.3h-247v-32.3H964.5z",
  "M964.5,549.2v32.3h-247v-32.3H964.5z",
  "M964.5,516.8v32.3h-247v-32.3H964.5z",
  "M964.5,484.5v32.3h-247v-32.3H964.5z",
  "M964.5,452.2v32.3h-247v-32.3H964.5z",
  "M964.5,419.8v32.3h-247v-32.3H964.5z",
  "M964.5,386.5v33.3h-247v-33.3H964.5z",
  "M1206.5,678.5v49h-242v-49H1206.5z",
  "M1206.5,646.2v32.3h-242v-32.3H1206.5z",
  "M1206.5,613.8v32.3h-242v-32.3H1206.5z",
  "M1206.5,581.5v32.3h-242v-32.3H1206.5z",
  "M1206.5,549.2v32.3h-242v-32.3H1206.5z",
  "M1206.5,516.8v32.3h-242v-32.3H1206.5z",
  "M1206.5,484.5v32.3h-242v-32.3H1206.5z",
  "M1206.5,452.2v32.3h-242v-32.3H1206.5z",
  "M1206.5,419.8v32.3h-242v-32.3H1206.5z",
  "M1206.5,386.5v33.3h-242v-33.3H1206.5z",
  "M1869.8,789.5l0.6,103h-283.8l-26-13h-35l-79-44v-18l-16-8.8V734l16,5.5v11l78,31h35l23,8h287H1869.8z",
  "M1559.5,781.5h-35l-78-31v-11l-16-5.5v-48l16,3.9v8l78,22.6l35-0.1l23,5.7h284l2.9,0l0.4,63.5h-0.3h-287  L1559.5,781.5z",
  "M1869,662.6l0.4,63.4l-2.9,0h-284l-23-5.7l-35,0.1l-78-22.6v-8l-16-3.9v-48l16,2.3v5l78,14.1l35-0.2l23,3.3h284  L1869,662.6z",
  "M1868.7,599.2l0.4,63.4l-2.5,0h-284l-23-3.3l-35,0.2l-78-14.1v-5l-16-2.3v-48l16,0.7v2l78,5.7l35-0.3l23,1h284  L1868.7,599.2z",
  "M1868.3,535.7l0.4,63.4l-2.2,0h-284l-23-1l-35,0.3l-78-5.7v-2l-16-0.7v-48l16-0.9v-1l78-2.8l35-0.4l23-1.3h284  L1868.3,535.7z",
  "M1867.9,472.3l0.4,63.4l-1.8,0h-284l-23,1.3l-35,0.4l-78,2.8v1l-16,0.9v-48l16-2.5v-4l78-11.2l35-0.6l23-3.7  h284L1867.9,472.3z",
  "M1867.6,408.8l0.4,63.4l-1.4,0h-284l-23,3.7l-35,0.6l-78,11.2v4l-16,2.5v-48l16-4v-7l78-19.7l35-0.7l23-6h284  L1867.6,408.8z",
  "M1867.2,345.4l0.4,63.4l-1.1,0h-284l-23,6l-35,0.7l-78,19.7v7l-16,4v-48l16-5.6v-10l78-28.1l35-0.8l23-8.3h284  H1867.2z",
  "M1866.9,281.9l0.4,63.5h-0.7h-284l-23,8.3l-35,0.8l-78,28.1v10l-16,5.6v-48l16-7.2v-13l78-36.6l35-0.9l23-10.7  h284H1866.9z",
  "M1866.5,217.5l0.4,64.4h-0.4h-284l-23,10.7l-35,0.9l-78,36.6v13l-16,7.2v-49l16-8.8v-16l78-45l35-1l23-13  H1866.5z",
  "M621.5,652.5v34.8l-27,10.2h-21l-10,4v-34.7v-4.1l10-2.9h21L621.5,652.5z",
  "M621.5,617.6v34.8l-27,7.4h-21l-10,2.9v-36.5v-2.2l10-1.8h21L621.5,617.6z",
  "M621.5,582.8v34.8l-27,4.5h-21l-10,1.8v-38.4v-0.3l10-0.7h21L621.5,582.8z",
  "M621.5,548v34.8l-27,1.7h-21l-10,0.7v-38.8l10,0.4h21L621.5,548z",
  "M621.5,513.1V548l-27-1.1h-21l-10-0.4v-1.6v-37.2l10,1.6h21L621.5,513.1z",
  "M621.5,478.3v34.8l-27-4h-21l-10-1.6v-3.4v-35.3l10,2.7h21L621.5,478.3z",
  "M621.5,443.5v34.8l-27-6.8h-21l-10-2.7v-5.3v-33.4l10,3.8h21L621.5,443.5z",
  "M621.5,408.7v34.8l-27-9.7h-21l-10-3.8v-7.2v-31.5l10,4.9h21L621.5,408.7z",
  "M621.5,372.8v35.8l-27-12.5h-21l-10-4.9v-9.1v-30.7l10,6h21L621.5,372.8z",
  "M621.5,687.3v54.9l-27,15.3h-21l-6,4v10l-4,2.2v-66.2v-6l10-4h21L621.5,687.3z",
  "M1347.5,666.2V706l-7-2.5h-21l-34-15v-5v-30.1l33.9,11.1h21L1347.5,666.2z",
  "M1347.5,626.5v39.8l-7.1-1.7h-21l-33.9-11.1v-3.7v-31.4l33.8,7.2h21L1347.5,626.5z",
  "M1347.5,586.7v39.8l-7.2-1h-21l-33.8-7.2v-2.3v-32.8l33.7,3.3h21L1347.5,586.7z",
  "M1347.5,546.9v39.8l-7.3-0.2h-21l-33.7-3.3v-1v-33.8v-0.3l33.6-0.6h21L1347.5,546.9z",
  "M1347.5,507.1v39.8l-7.4,0.6h-21l-33.6,0.6v-33.5v-1.7l33.4-4.4h21L1347.5,507.1z",
  "M1347.5,467.2v39.8l-7.6,1.4h-21l-33.4,4.4v-32.1v-3l33.3-8.3h21L1347.5,467.2z",
  "M1347.5,427.4v39.8l-7.7,2.3h-21l-33.3,8.3v-30.8v-4.3l33.2-12.2h21L1347.5,427.4z",
  "M1347.5,387.6v39.8l-7.8,3.1h-21l-33.2,12.2v-29.4v-5.7l33.1-16.1h21L1347.5,387.6z",
  "M1347.5,346.7v40.9l-7.9,3.9h-21l-33.1,16.1v-29.1v-7l33-20h21L1347.5,346.7z",
  "M1347.5,706v57.5l-7-4h-21l-34-18v-6v-47l34,15h21L1347.5,706z",
  "M563.5,707.5v66.2l-57,30.8l-25-1l-7,3v-65v-9l7-3h25L563.5,707.5z",
  "M1430.5,734v74.7l-13-7.2l-26,2l-37-22v-14l-7-4V706l7,2.5v7l37,14h26L1430.5,734z",
  "M563.5,701.5v6l-57,22h-25l-7,3v-40.9v-6.4l7-2.2h25l57-16.1V701.5z",
  "M563.5,662.7v4.1l-57,16.1h-25l-7,2.2v-43.5v-3.9l7-1.4h25l57-10.2V662.7z",
  "M563.5,623.9v2.2l-57,10.2h-25l-7,1.4v-46v-1.3l7-0.7h25l57-4.3V623.9z",
  "M563.5,585.2v0.3l-57,4.3h-25l-7,0.7v-47.3l7,0.1h25l57,1.5v1.6V585.2z",
  "M563.5,504.2v3.4v37.2l-57-1.5h-25l-7-0.1v-1.2v-46.1l7,0.9h25L563.5,504.2z",
  "M563.5,463.5v5.3v35.3l-57-7.5h-25l-7-0.9v-3.8v-43.6l7,1.7h25L563.5,463.5z",
  "M563.5,422.8v7.2v33.4l-57-13.3h-25l-7-1.7v-6.3v-41l7,2.4h25L563.5,422.8z",
  "M563.5,382.2v9.1v31.5l-57-19.2h-25l-7-2.4v-8.9v-38.5l7,3.2h25L563.5,382.2z",
  "M563.5,340.5v11v30.7l-57-25.1h-25l-7-3.2v-11.4v-36.9l7,4h25L563.5,340.5z",
  "M1430.5,686v48l-13-4.5h-26l-37-14v-7l-7-2.5v-39.8l7,1.7v4.9l37,10.1l26-0.1L1430.5,686z",
  "M1430.5,638.1v48l-13-3.2l-26,0.1l-37-10.1v-4.9l-7-1.7v-39.8l7,0.9v2.8l37,6.2l26-0.2L1430.5,638.1z",
  "M1430.5,590.1v48l-13-1.9l-26,0.2l-37-6.2v-2.8l-7-0.9v-39.8l7,0.2v0.7l37,2.3l26-0.3L1430.5,590.1z",
  "M1430.5,542.1v48l-13-0.6l-26,0.3l-37-2.3v-0.7l-7-0.2v-39.8l7-0.6v-1.5l37-1.5l26-0.5L1430.5,542.1z",
  "M1430.5,494.2v48l-13,0.7l-26,0.5l-37,1.5v1.5l-7,0.6v-39.8l7-1.3v-3.5l37-5.5l26-0.5L1430.5,494.2z",
  "M1430.5,446.2v48l-13,2l-26,0.5l-37,5.5v3.5l-7,1.3v-39.8l7-2.1v-5.7l37-9.3l26-0.7L1430.5,446.2z",
  "M1430.5,398.3v48l-13,3.3l-26,0.7l-37,9.3v5.7l-7,2.1v-39.8l7-2.8v-7.8l37-13.2l26-0.8L1430.5,398.3z",
  "M1430.5,350.3v48l-13,4.6l-26,0.8l-37,13.2v7.8l-7,2.8v-39.8l7-3.5v-9.9l37-17.1l26-0.9L1430.5,350.3z",
  "M1430.5,301.3v49l-13,5.9l-26,0.9l-37,17.1v9.9l-7,3.5v-40.9l7-4.2v-12l37-21l26-1L1430.5,301.3z",
  "M1285.5,683.5v5v47h-14l-13-8h-52v-49h52l13,5H1285.5z",
  "M717.5,678.5v49h-70l-10,8h-6v1l-10,5.7v-54.9l10-3.8h6l10-5H717.5z",
  "M1285.5,649.7v3.7v30.1h-14l-13-5h-52v-32.3h52l13,3.5H1285.5z",
  "M1285.5,615.9v2.3v31.4h-14l-13-3.5h-52v-32.3h52l13,2.1H1285.5z",
  "M1285.5,582.2v1v32.8h-14l-13-2.1h-52v-32.3h52l13,0.7H1285.5z",
  "M1285.5,548.4v33.8h-14l-13-0.7h-52v-32.3h52l13-0.8H1285.5z",
  "M1285.5,548.1v0.3h-14l-13,0.8h-52v-32.3h52l13-2.2h14V548.1z",
  "M1285.5,512.9v1.7h-14l-13,2.2h-52v-32.3h52l13-3.7h14V512.9z",
  "M1285.5,477.8v3h-14l-13,3.7h-52v-32.3h52l13-5.1h14V477.8z",
  "M1285.5,442.7v4.3h-14l-13,5.1h-52v-32.3h52l13-6.5h14V442.7z",
  "M1285.5,407.6v5.7h-14l-13,6.5h-52v-33.3h52l13-8h14V407.6z",
]

module.exports = pathArray
