import './components/header'
import './components/function'


// document.addEventListener('DOMContentLoaded', function() {
//     const languageSwitchers = document.querySelectorAll('.language-switcher');
    
//     languageSwitchers.forEach(switcher => {
//         const currentItem = switcher.querySelector('.current-language-item');
//         const dropdown = switcher.querySelector('.language-dropdown');
//         const languageItems = switcher.querySelectorAll('.language-item');
        
//         languageItems.forEach(item => {
//             item.addEventListener('click', function(e) {
//                 const newLang = this.getAttribute('data-lang');
//                 const newLangName = this.textContent;

//                 const currentLangSpan = switcher.querySelector('.current-language');
//                 currentLangSpan.textContent = newLangName;
//             });
//         });
        
//         document.addEventListener('click', function(e) {
//             if (!switcher.contains(e.target)) {
//                 dropdown.style.opacity = '0';
//                 dropdown.style.visibility = 'hidden';
//                 dropdown.style.transform = 'translateY(-10px)';
//             }
//         });
//     });
// });