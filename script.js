// Page ready event listener
$('document').ready(() => {
    loadPage();
});

// Function to loadPage()
const loadPage = () => {
    fetchQuote(); // fetchQuote()
};

// Api call function to fetchQuote()
const fetchQuote = () => {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://type.fit/api/quotes",
        "method": "GET"
      }
    
      $.ajax(settings).done(function (response) {
        const data = JSON.parse(response);
        console.log(data);
        const randomChoice = Math.floor(Math.random() * data.length); // Declare randomChoice
        updateUi(data, randomChoice); // Pass data and randomChoice to the updateUI() function
      });
};

// Function to updateUi()
const updateUi = (data, randomChoice) => {
    displayQuote(data, randomChoice); // displayQuote() 
    handleColors(colors); // handleColors()
};

// Function to handleRepeatQuote()
const displayQuote = (data, randomChoice) => {
    $('#text').text(data[randomChoice].text);
    $('#author').text(`- ${data[randomChoice].author.split(',')[0]}`);   
};

// List of custom css variable colors
const colors = ['var(--color1)',
'var(--color2)', 'var(--color3)',
'var(--color4)', 'var(--color5)',
'var(--color6)', 'var(--color7)',
'var(--color8)', 'var(--color9)',
'var(--color10)', 'var(--color11)',
'var(--color12)', 'var(--color13)',
'var(--color14)', 'var(--color15)',
];

// Function to handleColors()
const handleColors = (colors) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    $('body').css("background-color", randomColor);
    $('#quote-box').css("color", randomColor);
    $('#new-quote').css("background-color", randomColor);
    $('#twitter-logo').css("fill", randomColor);
    $('#quotes').css("color", randomColor); 
};

// New quote click handler
$('#new-quote').click(() => {
    fetchQuote();
});