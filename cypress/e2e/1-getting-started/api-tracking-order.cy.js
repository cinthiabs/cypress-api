const Api_Url = Cypress.env('Api_Url')
const Authorization = Cypress.env('Authorization')
const ID = 11;

it('Login', { 
    env: { 
      hideCredentials: true, 
      hideCredentialsOptions: {
        body: ['user,password']
      }
    }
}, () => {
    cy.api({
        method: 'POST',
        url: `${Api_Url}/Login`,
        body: {
            user: 'UserTest', 
            password: 'F854@5'
        }
    }).then((response) => {
           expect(response.status).to.equal(200); 
    });
});

it('Get tracking ID', { 
    env: { 
      hideCredentials: true
    }
}, () => {
    cy.api({
        method: 'GET',
        url: `${Api_Url}/Tracking?OrderID=${ID}`,
        headers: {
            Authorization: `Bearer ${Authorization}` 
        }    }).then((response) => {
            expect(response.status).to.equal(200);
            const found = response.body.some(item => item.orderid === ID);
            expect(found).to.be.true;
    });
});

it('Insert tracking status', { 
    env: { 
        hideCredentials: true
    }
}, () => {
    const data = {
        orderid: ID,
        date: new Date().toISOString(),
        statusID: 4 //Delivered
    };

    cy.api({
        method: 'POST', 
                url: `${Api_Url}/Tracking`, 
        headers: {
            Authorization: `Bearer ${Authorization}`
        },
        body: data 
    }).then((response) => {
        expect(response.status).to.equal(200); 
        expect(response.body.message).to.equal(`Order ${data.orderid} updated!`); 

    });
});
it('Insert tracking status finished', { 
    env: { 
        hideCredentials: true
    }
}, () => {
    const data = {
        orderid: 10,
        date: new Date().toISOString(),
        statusID: 10 //Finished
    };

    cy.api({
        method: 'POST', 
                url: `${Api_Url}/Tracking`, 
        headers: {
            Authorization: `Bearer ${Authorization}`
        },
        body: data 
    }).then((response) => {
        expect(response.status).to.equal(200); 
        expect(response.body.message).to.equal(`Order ${data.orderid} already updated!`); 

    });
});