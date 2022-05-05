const menu = [
    {
        'id': 1,
        'name': 'Vegetable Salmon',
        'image': 'menu-1.jpeg',
        'description': 'Salmon with vegetable',
        'category': 'meals',
        'price': '$12.00'
    },
    {
        'id': 2,
        'name': 'Pizza vegetarian',
        'image': 'menu-2.jpeg',
        'description': 'A pizza vegetarian with tomatoes',
        'category': 'meals',
        'price': '$11.00'
    },
    {
        'id': 3,
        'name': 'A chicken steak with fries',
        'image': 'menu-3.jpeg',
        'description': 'A well done steak with fries',
        'category': 'meals',
        'price': '$18.00'
    },
    {
        'id': 4,
        'name': 'Burger veggie',
        'image': 'menu-4.jpeg',
        'description': 'A burger well made for vegetarians',
        'category': 'meals',
        'price': '$16.00'
    },
    {
        'id': 5,
        'name': 'Chicken fries',
        'image': 'menu-5.jpeg',
        'description': 'Chickens with fries',
        'category': 'meals',
        'price': '$9.00'
    },
    {
        'id': 6,
        'name': 'Cocktail strawberry',
        'image': 'drink-1.jpeg',
        'description': 'A cocktail strawberry with raspberry on top',
        'category': 'drink',
        'price': '$5.00'
    },
    {
        'id': 7,
        'name': 'Puritan Cocktail',
        'image': 'drink-2.jpeg',
        'description': 'A cocktail variation between the Martini and the Alaska',
        'category': 'drink',
        'price': '$7.00'
    },
    {
        'id': 8,
        'name': 'Margarita cocktail',
        'image': 'drink-3.jpeg',
        'description': 'A margerita cocktail with lime on top',
        'category': 'drink',
        'price': '$9.00'
    }
]

const section_center = document.querySelector('.section-center')



window.addEventListener('DOMContentLoaded', ()=>{
    for (let i = 0; i <= menu.length; i++){
        let div = document.createElement('div')
        let article = document.createElement('article')
        article.classList.add('menu-item')

        /* image */
        let img = document.createElement('img')
        img.src = menu[i]['image']
        article.append(img)

        /* appending the elements */
        div.append(article)

        section_center.append(div)



        /* information */
        let info_div = document.createElement('div')
        info_div.classList.add('item-info')
        div.append(info_div)

        /* name item */
        let name = document.createElement('h4')
        name.textContent = menu[i]['name']
        info_div.append(name)

        /* description item */
        let description = document.createElement('h5')
        description.textContent = menu[i]['description']
        info_div.append(description)

        /* price item */
        let price = document.createElement('h4')
        price.textContent = menu[i]['price']
        info_div.append(price)
    }
})

/* all button filter */
const all = document.querySelector('.all')
all.addEventListener('click', ()=>{
    section_center.textContent = ''
    for (let i = 0; i <= menu.length; i++){
        let div = document.createElement('div')
        let article = document.createElement('article')
        article.classList.add('menu-item')

        /* image */
        let img = document.createElement('img')
        img.src = menu[i]['image']
        article.append(img)

        /* appending the elements */
        div.append(article)

        section_center.append(div)



        /* information */
        let info_div = document.createElement('div')
        info_div.classList.add('item-info')
        div.append(info_div)

        /* name item */
        let name = document.createElement('h4')
        name.textContent = menu[i]['name']
        info_div.append(name)

        /* description item */
        let description = document.createElement('h5')
        description.textContent = menu[i]['description']
        info_div.append(description)

        /* price item */
        let price = document.createElement('h4')
        price.textContent = menu[i]['price']
        info_div.append(price)
    }
})


/* drink menu filter */
const drink = document.querySelector('.drink')
drink.addEventListener('click', ()=>{
    section_center.textContent = ''
    for (let i = 0; i < menu.length; i++){
        if (menu[i]['category'] === 'drink'){
            let div = document.createElement('div')
        let article = document.createElement('article')
        article.classList.add('menu-item')

        /* image */
        let img = document.createElement('img')
        img.src = menu[i]['image']
        article.append(img)

        /* appending the elements */
        div.append(article)

        section_center.append(div)



        /* information */
        let info_div = document.createElement('div')
        info_div.classList.add('item-info')
        div.append(info_div)

        /* name item */
        let name = document.createElement('h4')
        name.textContent = menu[i]['name']
        info_div.append(name)

        /* description item */
        let description = document.createElement('h5')
        description.textContent = menu[i]['description']
        info_div.append(description)

        /* price item */
        let price = document.createElement('h4')
        price.textContent = menu[i]['price']
        info_div.append(price)
        }
    }
})


/* meals menu filter */
const meal = document.querySelector('.meals')
meal.addEventListener('click', ()=>{
    section_center.textContent = ''
    for (let i = 0; i < menu.length; i++){
        if (menu[i]['category'] === 'meals'){
            let div = document.createElement('div')
        let article = document.createElement('article')
        article.classList.add('menu-item')

        /* image */
        let img = document.createElement('img')
        img.src = menu[i]['image']
        article.append(img)

        /* appending the elements */
        div.append(article)

        section_center.append(div)



        /* information */
        let info_div = document.createElement('div')
        info_div.classList.add('item-info')
        div.append(info_div)

        /* name item */
        let name = document.createElement('h4')
        name.textContent = menu[i]['name']
        info_div.append(name)

        /* description item */
        let description = document.createElement('h5')
        description.textContent = menu[i]['description']
        info_div.append(description)

        /* price item */
        let price = document.createElement('h4')
        price.textContent = menu[i]['price']
        info_div.append(price)
        }
    }
})