const gkFloatPanel = document.createElement('div')
gkFloatPanel.innerHTML = `<div id="gk-inject-button" style="width:50px; height:50px; background-color:#3E8BF8; color:#FFFFFF; opacity:0.5; border-radius:25px; position:fixed; right:30px; bottom:10%; text-align:center; line-height:50px;">
OK
</div>`
document.body.insertBefore(gkFloatPanel, document.body.lastChild.nextSibling)

document.getElementById('gk-inject-button').onclick = function(){
    alert("test")
}
