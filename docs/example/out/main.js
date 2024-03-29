import { ColorPicker } from "./colorPicker.js";
// document.body.addEventListener("click", function (e: MouseEvent)
// {
// 	const el = e.target;
// 	if (el instanceof HTMLButtonElement)
// 	{
// 		const rect = { x: el.offsetLeft, y: el.offsetTop, width: el.offsetWidth - 6, height: el.offsetHeight };
// 		colorPicker.openMenu(rect);
// 	}
// });
document.body.querySelectorAll("button")
    .forEach(el => {
    el.addEventListener("click", btnClick);
});
const colorPicker = new ColorPicker();
// colorPicker.setStyle({window: {text: "blue"}});
// colorPicker.setColorHSL(200, 100, 50);
// colorPicker.setPlacement("down", "center");
// function logIt(e: Coordinate | Color)
// {
//     console.log(e.eventName, e);
// }
// colorPicker.addEventListener("opened", logIt);
// colorPicker.addEventListener("reopened", logIt);
// colorPicker.addEventListener("closed", logIt);
// colorPicker.addEventListener("input", logIt);
// colorPicker.addEventListener("changed", logIt);
// colorPicker.addEventListener("canceled", logIt);
// colorPicker.addEventListener("confirmed", logIt);
// colorPicker.removeEventListener("colorPicker-opened", logIt);
// colorPicker.setStyle({
//     buttonOk: { background: "#00d93d" },
//     buttonCancel: { text: "hsl(303, 100%, 27%)"  },
//     window: { background: "black", text: "white", borderWidth: 6 },
//     inputs: { background: "rgb(115, 115, 115)", text: "white", borderColor: "orange" },
//     pickedColorBorder: true,
// });
// colorPicker.setStyle(colorPicker.baseStyle);
function btnClick(e) {
    const rect = this.getBoundingClientRect();
    rect.x += window.pageXOffset;
    rect.y += window.pageYOffset;
    colorPicker.openMenu(rect);
}
const divChangecolor = document.getElementById("divChangecolor");
if (divChangecolor != null)
    divChangecolor.addEventListener("click", changeItsColor);
async function changeItsColor(e) {
    // const rect = this.getBoundingClientRect();
    // rect.x  += window.pageXOffset;
    // rect.y  += window.pageYOffset;
    const x = e.pageX;
    const y = e.pageY;
    try {
        const color = await colorPicker.pick_onCoordinates(x, y);
        if (color != undefined)
            this.style.backgroundColor = color.colorHSL;
    }
    catch (e) {
        console.error(e);
    }
}
