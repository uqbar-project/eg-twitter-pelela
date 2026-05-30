import { describe, expect, it } from 'vitest'
import { Twitter } from './twitter'

describe('Twitter', () => {
  describe('claseTweet', () => {
    it('debería retornar "danger" cuando hay 0 o menos caracteres restantes', () => {
      const twitter = new Twitter()
      twitter.tweet.texto = 'A'.repeat(140)
      expect(twitter.claseTweet).toBe('danger')
    })

    it('debería retornar "warning" cuando hay entre 1 y 10 caracteres restantes', () => {
      const twitter = new Twitter()
      twitter.tweet.texto = 'A'.repeat(135)
      expect(twitter.claseTweet).toBe('warning')
    })

    it('debería retornar "ok" cuando hay más de 10 caracteres restantes', () => {
      const twitter = new Twitter()
      twitter.tweet.texto = 'Hola mundo'
      expect(twitter.claseTweet).toBe('ok')
    })
  })
})

describe('Tweet', () => {
  describe('cantidadCaracteresRestantes', () => {
    it('debería retornar 140 cuando el texto está vacío', () => {
      const twitter = new Twitter()
      twitter.tweet.texto = ''
      expect(twitter.tweet.cantidadCaracteresRestantes).toBe(140)
    })

    it('debería retornar 0 cuando el texto tiene exactamente 140 caracteres', () => {
      const twitter = new Twitter()
      twitter.tweet.texto = 'A'.repeat(140)
      expect(twitter.tweet.cantidadCaracteresRestantes).toBe(0)
    })

    it('debería retornar un valor negativo cuando se excede el límite', () => {
      const twitter = new Twitter()
      twitter.tweet.texto = 'A'.repeat(150)
      expect(twitter.tweet.cantidadCaracteresRestantes).toBe(-10)
    })
  })
})
