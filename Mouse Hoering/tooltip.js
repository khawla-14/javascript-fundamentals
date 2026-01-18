// Step 1: Select the elements
let learnMore1 = document.querySelector('#learnMore1');
let tooltip1 = document.querySelector('#tooltip1');

// Step 2: Show tooltip when mouse enters
learnMore1.addEventListener('mouseenter', function () {
    tooltip1.classList.add('show');
});

// Step 3: Hide tooltip when mouse leaves
learnMore1.addEventListener('mouseleave', function () {
    tooltip1.classList.remove('show');
});

// Tooltip 2
let learnMore2 = document.querySelector('#learnMore2');
let tooltip2 = document.querySelector('#tooltip2');

learnMore2.addEventListener('mouseenter', function () {
    tooltip2.classList.add('show');
});

learnMore2.addEventListener('mouseleave', function () {
    tooltip2.classList.remove('show');
});

// Tooltip 3
let learnMore3 = document.querySelector('#learnMore3');
let tooltip3 = document.querySelector('#tooltip3');

learnMore3.addEventListener('mouseenter', function () {
    tooltip3.classList.add('show');
});

learnMore3.addEventListener('mouseleave', function () {
    tooltip3.classList.remove('show');
});




// Optimised version using a function
// function setupTooltip(learnMoreId, tooltipId) {
//     let learnMore = document.querySelector(learnMoreId);
//     let tooltip = document.querySelector(tooltipId);

//     learnMore.addEventListener('mouseenter', function () {
//         tooltip.classList.add('show');
//     });

//     learnMore.addEventListener('mouseleave', function () {
//         tooltip.classList.remove('show');
//     });
// }

// // Now we just call the function for each tooltip
// setupTooltip('#learnMore1', '#tooltip1');
// setupTooltip('#learnMore2', '#tooltip2');
// setupTooltip('#learnMore3', '#tooltip3');