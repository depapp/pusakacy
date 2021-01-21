const selectors = {
    title: '.product_label'
}

class HomePage {

    verify() {
        cy.get(selectors.title).should('be.visible')
    }

}

export default HomePage