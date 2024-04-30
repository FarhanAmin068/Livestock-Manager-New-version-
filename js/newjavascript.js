const data= [
    {
        id : 0,
        img : 'images/cow-grazing-green-meadow.jpg',
        name : 'Cow',
        price : 100000,
        save : 2000,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 1,
        img : 'images/close-up-goats-farm.jpg',
        name : 'Goat',
        price : 20000,
        save : 500,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 2,
        img : 'images/chicken.jpg',
        name : 'Chicken',
        price : 250,
        save : 15,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 3,
        img : 'images/duck.jpg',
        name : 'Duck',
        price : 600,
        save : 30,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 4,
        img : 'images/beef.jpg',
        name : 'Beef',
        price : 1000,
        save : 50,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 5,
        img : 'images/Mutton.jpg',
        name : 'Mutton',
        price : 1100,
        save : 60,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 6,
        img : 'images/egg.jpg',
        name : 'Egg',
        price : 140,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 7,
        img : 'images/milk.jpg',
        name : 'Milk',
        price : 100,
        save : 5,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
];

let cartList=[]; 

var i;
var detail =document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img')
var detailTitle = document.getElementById('detail-title')
var detailPrice = document.getElementById('detail-price')
var youSave = document.getElementById('you-save');
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('buy')
back.addEventListener('click',refreshPage)
var addToCarts = document.querySelectorAll('#add-to-cart')
var cart = document.getElementById('cart');


cart.addEventListener('click',displayCart)

var carts = document.getElementById('carts');

carts.addEventListener('click',()=>addToCart(getId))

var home = document.getElementById('logo');

home.addEventListener('click',hideCart);


document.addEventListener('click',function (e){
    if(e.target.id=='remove'){
        var itemId = e.target.parentNode.id
        removeFromCart(itemId)
    }
})



for(i=0;i<data.length;i++){
    detail[i].addEventListener('click',handleDetail)
}

var getId;


addToCarts.forEach(val=>val.addEventListener('click',()=>addToCart(val.parentNode.id)));


function handleDetail(e){
    detailsPage.style.display = 'block'
    getId= this.parentNode.id;
    detailsImg.src= data[getId].img;
    detailTitle.innerHTML=   data[getId].name;
    detailPrice.innerHTML= 'Price : tk ' +data[getId].price;
    youSave.innerHTML= 'You save : (tk ' + data[getId].save + ')';
}

// add item to the cart
function addToCart(id) {
    if(!data[id].itemInCart){
        cartList= [...cartList,data[id]];
        addItem()
        
        alert('item added to your cart')

    }
    else{
        alert('your item is already there')
    }
    data[id].itemInCart= true
}


function refreshPage(){
    detailsPage.style.display = 'none'
}

function hideCart(){
    document.getElementById('main').style.display= "block";
    document.getElementById('cart-container').style.display= "none";
}

function displayCart(){
    document.getElementById('main').style.display= "none";
    document.getElementById('details-page').style.display= "none";
    document.getElementById('cart-container').style.display= "block";
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
    else{
        document.getElementById('empty-cart').style.display= "none";
        document.getElementById('cart-with-items').style.display= "block";
        
    }
}

var totalAmount;
var totalItems;
var totalSaving;


function addItem(){
    totalAmount=0;
    totalItems = 0;
    totalSaving=0
    var clrNode=document.getElementById('item-body');
        clrNode.innerHTML= '';
        console.log(clrNode.childNodes)
        cartList.map((cart)=>
        {
            var cartCont = document.getElementById('item-body');
            totalAmount = totalAmount + cart.price;
            totalSaving = totalSaving + cart.save;
            totalItems = totalItems + 1;

            var tempCart = document.createElement('div')
            tempCart.setAttribute('class','cart-list');
            tempCart.setAttribute('id',cart.id);

            var listImg = document.createElement('img');
            listImg.setAttribute('id','list-img');
            listImg.src = cart.img
            tempCart.appendChild(listImg)

            var listName = document.createElement('h3');
            listName.setAttribute('class','list-name');
            listName.innerHTML = cart.name;
            tempCart.appendChild(listName)

            var listPay = document.createElement('h3');
            listPay.setAttribute('class','pay');
            listPay.innerHTML = cart.price;
            tempCart.appendChild(listPay);

            var listQuantity = document.createElement('h3');
            listQuantity.setAttribute('class','quantity');
            listQuantity.innerHTML = '1';
            tempCart.appendChild(listQuantity);

            var listTrash = document.createElement('i');
            listTrash.setAttribute('class','fa fa-trash ');
            listTrash.setAttribute('id','remove');
            tempCart.appendChild(listTrash);

            cartCont.appendChild(tempCart)
            
        })
        document.getElementById('total-amount').innerHTML = 'Total Amount :  tk' + totalAmount;
        document.getElementById('total-items').innerHTML = 'Total Items : ' + totalItems;
        document.getElementById('you-saved').innerHTML = 'You Saved : tk ' + totalSaving;
        document.getElementById('total').style.display= "block";
}
document.getElementById('go-back').addEventListener('click', function() {
    window.location.href = 'index2.html'; 
});


function removeFromCart(itemId){
    data[itemId].itemInCart = false
    cartList = cartList.filter((list)=>list.id!=itemId);
    addItem()
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
}
var confirmOrderButton = document.getElementById('confirm-order');


confirmOrderButton.addEventListener('click', function () {

    if (cartList.length > 0) {
      
        window.location.href = 'checkout.html'; 
    } else {
 
        alert('Your cart is empty. Add items to your cart before confirming the order.');
    }
});
const goBackEmptyButton = document.getElementById('go-back-empty');


goBackEmptyButton.addEventListener('click', function () {

    window.location.href = 'index2.html'; 
});

