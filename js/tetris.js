const canvas = document.getElementById("main")
const scoreBox = document.getElementById("score")
const nextCanvas = document.getElementById("next")
const ctx = canvas.getContext("2d")
const nCtx = nextCanvas.getContext("2d")
ctx.scale(blockSize,blockSize) // x, y 에 blockSize 대입 블록크기 지정 간편화
nCtx.scale(blockSize,blockSize)
let action = new Actions(ctx, nCtx)
var randNext = 0;
let score = 0;

setInterval(() => {
	newGameRendering()
}, gameTime); 

let newGameRendering = () => { // let newGameRendering = function() {};
	sending()
	action.nextRendering()
	if (action.fallingBlock === null) {
		var rand = 0;
		if(randNext == 0) {
			rand = Math.floor(Math.random()*7)+1   // array(0) 이 나오면 안되서 1을 더 해줬다.(1~7) *7로 시도했었는데 0~7사이의 난수가 생성되서 공백배열블록이 생성되고 말았다.
		}
		else {
			rand = randNext;
		}
		randNext = Math.floor(Math.random()*7)+1
		const newBlock = new Block(Blocks[rand], ctx, nCtx)
		const nextBlock = new Block(Blocks[randNext], ctx, nCtx)
		action.fallingBlock = newBlock
		action.nextBlock = nextBlock;
		action.moveDown()
		console.table("grid : " +action.grid)
		console.table("nextGrid : " + action.nextGrid)
		console.log(randNext);
		// console.log("rand : " + rand)
		// console.log(newBlock)
		
		
	}
	else { // 이미 떨어지는 블록이 있는경우
		action.moveDown();
	}
}

const sending = () => {
	const fullLine = (row) => {
		for (let x of row) { // 열에 루프생성 해서 x의 값이 0이 아니라면 트루를 반환시켜줌(한줄이 값으로 가득 찼다는 뜻)
			if (x === 0) {
				return false
			}
		}
		return true
	}

	for (let i = 0; i < action.grid.length; i++) { // 한줄 꽉 채울 시 10점 증가 및 한줄 삭제 후 0 행열로 다시 채워준다.(젠가처럼 위에 다시 쌓아올리는 느낌?)
		if (fullLine(action.grid[i])) { // 그리드의 i 값 즉 열 값을 대입해줘서 블록으로 가득 찼는지 판단
			score += plusScore
			action.grid.splice(i,1)
			action.grid.unshift([0,0,0,0,0,0,0,0,0,0])
			
		}
	}
	scoreBox.innerHTML = "Score: " + String(score);

}

document.addEventListener("keydown", (e) => {
	switch(e.key) {
		case "ArrowUp" :
			action.rotate()
			break
		case "ArrowRight" :
			action.move(true)
			break
		case "ArrowLeft" :
			action.move(false)
			break
		case "ArrowDown" :
			action.moveDown()
			break
	}
})
