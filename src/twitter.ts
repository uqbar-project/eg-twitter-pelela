const LONGITUD_MAXIMA_TWEET = 140

export class Twitter {
  tweet: string = ''

  get claseTweet(): string {
    switch (true) {
      case this.cantidadCaracteresRestantes <= 0:
        return 'danger'
      case this.cantidadCaracteresRestantes <= 10:
        return 'warning'
      default:
        return 'ok'
    }
  }

  get cantidadCaracteresRestantes() {
    return LONGITUD_MAXIMA_TWEET - this.tweet.length
  }
}
