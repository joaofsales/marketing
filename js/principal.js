const plans = [
    {
        name: 'Basic',
        storage: '10GB storage',
        email: '10 e-mails',
        domains: '10 domains',
        support: 'Unlimited support',
        price: '$ 10'
    },
    {
        name: 'Pro',
        storage: '25GB storage',
        email: '25 e-mails',
        domains: '25 domains',
        support: 'Unlimited support',
        price: '$ 25'
    },
    {
        name: 'Premium',
        storage: '50GB storage',
        email: '50 e-mails',
        domains: '50 domains',
        support: 'Unlimited support',
        price: '$ 50'
    }
]

// pegando o elemento grid-card-price do html
const gridCardPrice = document.querySelector('.grid-card-price');

plans.forEach(plan => {  // plan e o nome da funcao ou esta pegando do id ?********
    // criando o card-price e os elementos que compoem o card-price
    const cardPrice = document.createElement('div');  
    const cardPriceHeader = document.createElement('div');
    const cardPriceBody = document.createElement('div');
    const cardPriceFooter = document.createElement('div');

    // inserindo classes
    cardPrice.className = 'card-price'
    cardPriceHeader.className = 'card-price-header'
    cardPriceBody.className = 'card-price-body'
    cardPriceFooter.className = 'card-price-footer'

    // escrevendo o titulo do card
    const cardName = document.createElement('h3');
    cardName.textContent = plan.name

    // escrevendo conteudos  // pq do value ?****
    const storageValue = document.createElement('p');
    storageValue.textContent = plan.storage
    const emailValue = document.createElement('p');
    emailValue.textContent = plan.email
    const domainsValue = document.createElement('p');
    domainsValue.textContent = plan.domains
    const supportValue = document.createElement('p');
    supportValue.textContent = plan.support

    // adicionando titulo no card price
    cardPrice.appendChild(cardPriceHeader)
    cardPriceHeader.appendChild(cardName)

    // adicionando conteudos do card-price-body
    cardPriceBody.appendChild(storageValue)
    cardPriceBody.appendChild(emailValue)
    cardPriceBody.appendChild(domainsValue)
    cardPriceBody.appendChild(supportValue)

    const cardPriceBodyPriceContent = document.createElement('div');
    const cardPriceBodyPriceValue = document.createElement('h2');
    const cardPriceBodyPriceInfo = document.createElement('p');

    cardPriceBodyPriceValue.textContent = plan.price
    cardPriceBodyPriceInfo.textContent = 'per mounth'

    cardPriceBodyPriceContent.appendChild(cardPriceBodyPriceValue)
    cardPriceBodyPriceContent.appendChild(cardPriceBodyPriceInfo)

    cardPriceBody.appendChild(cardPriceBodyPriceContent)

    // adicionando card-price-body no card-price
    cardPrice.appendChild(cardPriceBody)

    // criando botao do card
    const cardPriceFooterButton = document.createElement('button');
    cardPriceFooterButton.textContent = 'Sing up'

    // adicionando botao no card-price-footer
    cardPriceFooter.appendChild(cardPriceFooterButton)

    // adicionar o card-price-footer no card-price
    cardPrice.appendChild(cardPriceFooter)
    
    // adicionando card-price no grid-card-price
    gridCardPrice.appendChild(cardPrice)
})
