const selectors = {
    title: '.title'
}

class HomePage {

    verify() {
        cy.get(selectors.title).should('be.visible')
    }

}

export default HomePage