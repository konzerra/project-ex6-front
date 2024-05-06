
export class RatingStar {
  stars: Star[] = []
  rate = 5
  constructor() {
    for (let i = 0; i < 5; i++) {
      this.stars.push(
        {
          checked: true
        }
      )
    }
  }

  public clicked(index:number){
    for( let i = 0; i < 5; i++){
      if(i<=index){
        this.stars[i].checked = true
      }else {
        this.stars[i].checked = false
      }
    }
    this.rate = index+1
    console.log(this.stars)
  }



}

export interface Star{
  checked: boolean
}
