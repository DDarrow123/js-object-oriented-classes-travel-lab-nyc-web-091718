class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
    return parseInt(year) - this.startDate.getFullYear()
  }



} // end of class


class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

 blocksTravelled() {
   let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

   const verticalDistance = Math.abs(parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical))

   const horizontalDistance = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))

   return verticalDistance + horizontalDistance
    }

   estimatedTime(peak = false) {
     const blocksTravelled = this.blocksTravelled()
     if (peak) {
       return blocksTravelled / 2
     }
     return blocksTravelled / 3
   }


} //end of class
