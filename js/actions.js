class Actions { // 기능 구현은 Actions 클래스에서 할생각
    constructor(ctx, nCtx) { // 생성자들 
        this.ctx = ctx;
        this.nCtx = nCtx;
        this.fallingBlock = null;
        this.nGrid = this.makeNextGrid();
        this.grid = this.makeGrid();
        this.nextGrid = this.makeNextGrid();
    }

    makeGrid() { // 0으로 채워진 2차원 배열 그리드 생성
        let grid = [];
        for (var i = 0; i < rows; i++) {
            grid.push([]); 
            for(var j=0; j < cols; j++) {
                grid[grid.length-1].push(0);
            }
        }

        return grid;
    }

    makeNextGrid() { // next블록 채울 cell 생성
        let nextGrid = [];
        
            for (var i = 0; i < nRows; i++) {
                nextGrid.push([]); 
                for(var j=0; j < nCols; j++) {
                    nextGrid[nextGrid.length-1].push(0);
                }
            }
        return nextGrid;
    }



    rendering() { // 그리드 셀 렌더링
        for (let i = 0; i < this.grid.length; i++) {
            for(let j = 0; j < this.grid[i].length; j++) {
                let cell = this.grid[i][j]
                this.ctx.fillStyle = colors[cell]
                this.ctx.fillRect(j, i, 0.9, 0.9)
                
                
            }
        }

        if(this.fallingBlock !== null) {
            this.fallingBlock.renderBlock()
        }
    }

    nextRendering() { 
        if(randNext == 0 ) {
        for (let i = 0; i < this.nGrid.length; i++) {
            for(let j = 0; j < this.nGrid[i].length; j++) {
                let cell = this.nGrid[i][j]
                this.nCtx.fillStyle = "white"
                this.nCtx.fillRect(j, i, 0.9, 0.9)
            }
        }
        } else if(randNext == 1) {
            for (let i = 0; i < this.nGrid.length; i++) {
                for(let j = 0; j < this.nGrid[i].length; j++) {
                    this.nCtx.fillStyle = "red";
                    this.nCtx.fillRect(0, 0, 0.9, 0.9)
                    this.nCtx.fillRect(1, 0, 0.9, 0.9)
                    this.nCtx.fillRect(2, 0, 0.9, 0.9)
                    this.nCtx.fillRect(3, 0, 0.9, 0.9)
                    this.nCtx.fillStyle = "white";
                    this.nCtx.fillRect(0, 1, 0.9, 0.9)
                    this.nCtx.fillRect(1, 1, 0.9, 0.9)
                    this.nCtx.fillRect(2, 1, 0.9, 0.9)
                    this.nCtx.fillRect(3, 1, 0.9, 0.9)
                   
                }
            }
        } else if(randNext == 2) {
            for (let i = 0; i < this.nGrid.length; i++) {
                for(let j = 0; j < this.nGrid[i].length; j++) {
                    this.nCtx.fillStyle = "blue";
                    this.nCtx.fillRect(0, 0, 0.9, 0.9)
                    this.nCtx.fillRect(0, 1, 0.9, 0.9)
                    this.nCtx.fillRect(1, 1, 0.9, 0.9)
                    this.nCtx.fillRect(2, 1, 0.9, 0.9)
                    this.nCtx.fillStyle = "white";
                    this.nCtx.fillRect(1, 0, 0.9, 0.9)
                    this.nCtx.fillRect(2, 0, 0.9, 0.9)
                    this.nCtx.fillRect(3, 0, 0.9, 0.9)
                    this.nCtx.fillRect(3, 1, 0.9, 0.9)
                   
                }
            }
        } else if(randNext == 3) {
            for (let i = 0; i < this.nGrid.length; i++) {
                for(let j = 0; j < this.nGrid[i].length; j++) {
                    this.nCtx.fillStyle = "lime";
                    this.nCtx.fillRect(2, 0, 0.9, 0.9)
                    this.nCtx.fillRect(0, 1, 0.9, 0.9)
                    this.nCtx.fillRect(1, 1, 0.9, 0.9)
                    this.nCtx.fillRect(2, 1, 0.9, 0.9)
                    this.nCtx.fillStyle = "white";
                    this.nCtx.fillRect(0, 0, 0.9, 0.9)
                    this.nCtx.fillRect(1, 0, 0.9, 0.9)
                    this.nCtx.fillRect(3, 0, 0.9, 0.9)
                    this.nCtx.fillRect(3, 1, 0.9, 0.9)

                   
                }
            }
        } else if(randNext == 4) {
            for (let i = 0; i < this.nGrid.length; i++) {
                for(let j = 0; j < this.nGrid[i].length; j++) {
                    this.nCtx.fillStyle = "yellow";
                    this.nCtx.fillRect(0, 0, 0.9, 0.9)
                    this.nCtx.fillRect(0, 1, 0.9, 0.9)
                    this.nCtx.fillRect(1, 0, 0.9, 0.9)
                    this.nCtx.fillRect(1, 1, 0.9, 0.9)
                    this.nCtx.fillStyle = "white";
                    this.nCtx.fillRect(2, 0, 0.9, 0.9)
                    this.nCtx.fillRect(3, 0, 0.9, 0.9)
                    this.nCtx.fillRect(2, 1, 0.9, 0.9)
                    this.nCtx.fillRect(3, 1, 0.9, 0.9)
                   
                }
            }
        } else if(randNext == 5) {
            for (let i = 0; i < this.nGrid.length; i++) {
                for(let j = 0; j < this.nGrid[i].length; j++) {
                    this.nCtx.fillStyle = "orange";
                    this.nCtx.fillRect(1, 0, 0.9, 0.9)
                    this.nCtx.fillRect(2, 0, 0.9, 0.9)
                    this.nCtx.fillRect(0, 1, 0.9, 0.9)
                    this.nCtx.fillRect(1, 1, 0.9, 0.9)
                    this.nCtx.fillStyle = "white";
                    this.nCtx.fillRect(0, 0, 0.9, 0.9)
                    this.nCtx.fillRect(3, 0, 0.9, 0.9)
                    this.nCtx.fillRect(2, 1, 0.9, 0.9)
                    this.nCtx.fillRect(3, 1, 0.9, 0.9)
                   
                }
            }
        } else if(randNext == 6) {
            for (let i = 0; i < this.nGrid.length; i++) {
                for(let j = 0; j < this.nGrid[i].length; j++) {
                    this.nCtx.fillStyle = "purple";
                    this.nCtx.fillRect(1, 0, 0.9, 0.9)
                    this.nCtx.fillRect(0, 1, 0.9, 0.9)
                    this.nCtx.fillRect(1, 1, 0.9, 0.9)
                    this.nCtx.fillRect(2, 1, 0.9, 0.9)
                    this.nCtx.fillStyle = "white";
                    this.nCtx.fillRect(0, 0, 0.9, 0.9)
                    this.nCtx.fillRect(2, 0, 0.9, 0.9)
                    this.nCtx.fillRect(3, 0, 0.9, 0.9)
                    this.nCtx.fillRect(3, 1, 0.9, 0.9)
                   
                }
            }
        } else if(randNext == 7) {
            for (let i = 0; i < this.nGrid.length; i++) {
                for(let j = 0; j < this.nGrid[i].length; j++) {
                    this.nCtx.fillStyle = "fuchsia";
                    this.nCtx.fillRect(0, 0, 0.9, 0.9)
                    this.nCtx.fillRect(1, 0, 0.9, 0.9)
                    this.nCtx.fillRect(1, 1, 0.9, 0.9)
                    this.nCtx.fillRect(2, 1, 0.9, 0.9)
                    this.nCtx.fillStyle = "white";
                    this.nCtx.fillRect(2, 0, 0.9, 0.9)
                    this.nCtx.fillRect(0, 1, 0.9, 0.9)
                    this.nCtx.fillRect(3, 0, 0.9, 0.9)
                    this.nCtx.fillRect(3, 1, 0.9, 0.9)
                   
                }
            }
        }
         
    }

    collision(x, y) {
        const block = this.fallingBlock.block;
        const bl = block.length;
        for (let i = 0; i < bl; i++) {
            for (let j = 0; j < bl; j++) {
                if (block[i][j] > 0) {
                    let p = x + j
                    let q = y + i 
                    if (p >= 0 && p < cols && q < rows) {
                        if(this.grid[q][p] > 0){
                            return true
                        }
                            
                    } else {
                        return true
                } 
                }
            }
        }

        return false
    }
    



    moveDown() {
        if(this.fallingBlock === null) {
            this.rendering()
            return
        } else if(this.collision(this.fallingBlock.x, this.fallingBlock.y+1)) {
            const block = this.fallingBlock.block;
            const x = this.fallingBlock.x
            const y = this.fallingBlock.y
            block.map((row, i) => {
                row.map((cell, j) => {
                    let p = x + j
                    let q = y + i
                    if (p >= 0 && p < cols && q < rows && cell > 0) {
                        this.grid[q][p] = block[i][j]
                    }
                })
            })

            // 게임오버 확인
            if (this.fallingBlock.y === 0) { // y 좌표 0 되면 게임오버
                window.alert("패배하셨습니다. 당신의 최종점수는 " + String(score) + "점 입니다")
	            score = 0; // 점수 초기화 추가 (기존 플레이 score 데이터가 그대로 새 게임에 이전되는 문제 해결)
                this.grid = this.makeGrid()
            }
            this.fallingBlock = null // 게임이 끝나지 않은 상태면 null 조건 붙여서 다시 블록 렌더링
            
        } else {
            this.fallingBlock.y += 1
        }
        this.rendering()
    }
    
	move(right) {
		if (this.fallingBlock === null) { // 떨어지는 블록이 있는지 부터 체크
			return
		}

		let x = this.fallingBlock.x
		let y = this.fallingBlock.y
		if (right) { // if right 참인경우 x 좌표 +1 (오른쪽이동)
			if (!this.collision(x+1, y)) {
				this.fallingBlock.x += 1
			} 
		} else { // false 일경우 x 좌표 -1 (왼쪽이동)
			if (!this.collision(x-1, y)) {
				this.fallingBlock.x -= 1
			}
		}
		this.rendering()
	}

	rotate() {
		if(this.fallingBlock !== null) {
			let block = this.fallingBlock.block
			for(let y = 0; y < block.length; y++) {
				for (let x = 0; x < y; x++) {
					[this.fallingBlock.block[x][y], this.fallingBlock.block[y][x]] =
					[this.fallingBlock.block[y][x], this.fallingBlock.block[x][y]]
				}
			}

			this.fallingBlock.block.forEach((rows => rows.reverse()))
		}
		this.rendering()
	}
}