const LONGITUD_MAXIMA_TWEET = 140

export class Twitter {
  tweet = new Tweet()

  get claseTweet(): string {
    switch (true) {
      case this.tweet.cantidadCaracteresRestantes <= 0:
        return 'danger'
      case this.tweet.cantidadCaracteresRestantes <= 10:
        return 'warning'
      default:
        return 'ok'
    }
  }

}

class Tweet {
  texto = ''

  get cantidadCaracteresRestantes() {
    return LONGITUD_MAXIMA_TWEET - this.texto.length
  }
}