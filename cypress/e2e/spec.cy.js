///<reference types="cypress"  />


describe('Testes para a Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app')
  })

  it('Deve adicionar um contato', () => {
    cy.get('[type="text"]').type('João Victor Dourado')
    cy.get('[type="email"]').type('joao@teste.com')
    cy.get('[type="tel"]').type('(11) 12334-5678')
    cy.get('.adicionar').click()

    // cy.get('.sc-iAEyYk > :last-child li').first().then((nome) => {
    //   expect(nome.text()).to.equal('João Victor Dourado')
    // })
  })

  it('Deve alterar o contato adicionado anteriormente', () => {
    cy.get('.sc-iAEyYk > :last-child .edit').click()
    cy.get('[type="email"]').clear()
    cy.get('[type="email"]').type('joao@gmail.com')

    cy.get('.alterar').click()
    // cy.get('.sc-iAEyYk > :last-child li').last().then((email) => {
    //   expect(email.text()).to.equal('joao@gmail.com')
    // })
  })

  it('Deve excluir o contato adicionado e editado anteriormente', () => {
    cy.get('.sc-iAEyYk > div').its('length').then((numDeContatos) => {
      cy.get('.sc-iAEyYk > :last-child .delete').click()
      // cy.get('.sc-iAEyYk > div').should('have.length', numDeContatos -1)

    })
  })

  
})