//assuming this database data is fetched via api calls
const database = {
    'cards': [
        {
            imageUrl: 'https://www.thestatesman.com/wp-content/uploads/2018/06/Online-Shopping.jpg',
            title: 'What\' my aesthetic?',
            description: 'What is my aesthetic? Answer now and our aesthetic finder will tell you whether you\'re glam spoo.',
            list: 6,
            views: 894,
            likes: 14,
            author: 'Agnes'
        },
        {
            imageUrl: 'https://www.thestatesman.com/wp-content/uploads/2018/06/Online-Shopping.jpg',
            title: 'Are you a country girl or a city girl?',
            description: 'Again some unwanted description.',
            list: 29,
            views: 1632,
            likes: 39,
            author: 'Isabella'
        }
    ],
    'quiz_categories': [
        'Women', 'Men', 'couples', 'Adults', 'Kids', 'Living', 'Personality',
        'Hobby', 'Relationship', 'Animals', 'Travel', 'Film', 'Politics', 'History',
        'Sport', 'Girls', 'Trivia', 'Health', 'Teens', 'Food', 'Music', 
        'Tecchnology', 'Education', 'Career', 'Entertainment'
    ],
    'story_genres': [
        'Action', 'Adventure', 'Romance', 'Long', 'Historical', 'Horror',
        'Humor', 'Mystery', 'Nonfiction', 'Poetry', 'Realistic', 'Fantasy',
        'Fanfiction', 'Thriller', 'Challenge', 'Science Fiction', 'Short Stories', 'Other'
    ],
    'popular_tags': [
        'Girls', 'Friends', 'Fun', 'Teens', 'Love', 'Personality', 'Food',
        'History', 'Name', 'Generator', 'Character', 'Lifestyle', 'Religion',
        'Music', 'Style', 'Animals', 'Knowledge', 'Pets', 'Tradition', 'Life',
        'Culture', 'Literature', 'Fashion', 'Family', 'Other'
    ],
    'top_quiz_cards': [
        {
            'url': 'https://cdn.dogtownmedia.com/wp-content/uploads/2016/06/12194056/material-design-android-app-developer.jpg',
            'content': 'Sissy Quiz',
        },
        {
            'url': 'https://cdn.dogtownmedia.com/wp-content/uploads/2016/06/12194056/material-design-android-app-developer.jpg',
            'content': 'What will your Wife\'s name be?',
        },
        {
            'url': 'https://cdn.dogtownmedia.com/wp-content/uploads/2016/06/12194056/material-design-android-app-developer.jpg',
            'content': 'Who will be my future husband?',
        },
        {
            'url': 'https://cdn.dogtownmedia.com/wp-content/uploads/2016/06/12194056/material-design-android-app-developer.jpg',
            'content': 'What\'s my aesthetic?',
        },
    ]
}

function renderCard(props){
    const { 
        imageUrl, 
        title, 
        description,
        list,
        views,
        likes,
        author
    } = props;

    let cardContainerWrapper = document.createElement('div');
    cardContainerWrapper.classList.add('card-container-wrapper');

    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    let cardImageContainer = document.createElement('div');
    cardImageContainer.classList.add('card-image-container');
    cardImageContainer.style.backgroundImage = `url('${imageUrl}')`;

    let monthTag = document.createElement('p');
    monthTag.textContent = '1 month ago';
    monthTag.classList.add('month-tag');

    let quizTag = document.createElement('p');
    quizTag.textContent = 'Quiz';
    quizTag.classList.add('quiz-tag');

    cardImageContainer.appendChild(monthTag);
    cardImageContainer.appendChild(quizTag);
    cardContainer.appendChild(cardImageContainer);

    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    let cardTitle = document.createElement('h1');
    cardTitle.textContent = title;
    cardTitle.classList.add('card-title');
    
    let cardDescription = document.createElement('p');
    cardDescription.textContent = description;
    cardDescription.classList.add('card-description');

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    cardContainer.appendChild(cardContent);

    cardContainerWrapper.appendChild(cardContainer);

    let cardInfo = document.createElement('ul');
    cardInfo.classList.add('card-icon-list');

    const renderCardIconItem = (content, ...styles)=>{
        let cardItem = document.createElement('li');
        cardItem.classList.add('card-icon-item');
        
        let icon = document.createElement('i');
        icon.classList.add(...styles);
        
        let description = document.createElement('span');
        description.textContent = content;
        
        cardItem.appendChild(icon);
        cardItem.appendChild(description);

        return cardItem;
    }
    
    cardInfo.appendChild(renderCardIconItem(list, 'fa', 'fa-list','card-icon'));
    cardInfo.appendChild(renderCardIconItem(views, 'fa', 'fa-eye', 'card-icon'));
    cardInfo.appendChild(renderCardIconItem(likes, 'fa', 'fa-thumbs-up', 'card-icon'));
    cardInfo.appendChild(renderCardIconItem(author, 'fa', 'fa-user', 'card-icon'));

    cardContainerWrapper.appendChild(cardInfo);

    return cardContainerWrapper;
}

function renderCards(){
    const cardsContainer = document.getElementById('cardsContainer');
    const cards = database["cards"];
    for(let i=0;i<10;i++){
        for(const cardDetails of cards){
            const card = renderCard(cardDetails);
            cardsContainer.appendChild(card);
        }
    }
}

function renderCategoryListItem(name, selected=false){
    let category = document.createElement('a');
    category.classList.add('categories-item');
    if(selected)
        category.classList.add('categories-item-selected');
    category.href = "#";
    category.textContent = name;
    return category;
}

function renderCategoryListTo(containerId, list, selectedCategory){
    const categoryList = document.getElementById(containerId);
    for(let name of list){
        const category = renderCategoryListItem(name, name===selectedCategory);
        categoryList.appendChild(category);
    }
}

function renderTopQuizCard(cardDetails){
    const {url, content} = cardDetails;

    let topQuizCard = document.createElement('div');
    topQuizCard.classList.add('top-quiz-card');

    let image = document.createElement('img');
    image.classList.add('top-quiz-image');
    image.alt = 'quiz picture';
    image.src = url;

    let topQuizContent = document.createElement('div');
    topQuizContent.classList.add('top-quiz-content');

    let topQuizDescription = document.createElement('p');
    topQuizDescription.classList.add('top-quiz-description');
    topQuizDescription.textContent = content;
    
    topQuizCard.appendChild(image);
    topQuizContent.appendChild(topQuizDescription);
    topQuizCard.appendChild(topQuizContent);

    return topQuizCard;
}

function renderTopQuizCards(){
    const { top_quiz_cards } = database;
    const topQuizesContainer = document.getElementById('topQuizesContainer');

    for(let cardDetails of top_quiz_cards){
        const topQuizCard = renderTopQuizCard(cardDetails);
        topQuizesContainer.appendChild(topQuizCard);
    }
}

const initialise = () => {

    renderCards();

    renderCategoryListTo( "quizCategories", database["quiz_categories"], "Women");
    renderCategoryListTo( "storyGenres", database["story_genres"]);

    renderTopQuizCards();

    renderCategoryListTo( "popularTags", database["popular_tags"]);

    const navToggleButton = document.getElementById('navToggleButton');
    const navToggleContainer = document.getElementById('navToggleContainer');

    navToggleButton.addEventListener('click', ()=>{

        const { height } = navToggleContainer.style;
        navToggleContainer.style.height = height==='240px'? '0px' : '240px';
        
    });

}

window.addEventListener('load', initialise);