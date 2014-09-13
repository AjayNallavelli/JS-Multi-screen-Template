window.app = window.app || {};

window.app.showPage2FromPage1 = function() {
    $('#page1').removeClass('centerPage').addClass('leftPage');
    $('#page2').removeClass('rightPage').addClass('centerPage');

};

window.app.showPage3FromPage1 = function() {
    $('#page1').removeClass('centerPage').addClass('leftPage');
    $('#page3').removeClass('rightPage').addClass('centerPage');
};

window.app.showPage1FromPage2 = function() {
    $('#page1').removeClass('leftPage').addClass('centerPage');
    $('#page2').removeClass('centerPage').addClass('rightPage');
};
window.app.showPage1FromPage3 = function() {
    $('#page1').removeClass('leftPage').addClass('centerPage');
    $('#page3').removeClass('centerPage').addClass('rightPage');
};