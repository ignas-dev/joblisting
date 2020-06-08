 const ctrl = (() => {
    const data = [{
     "id": 1,
     "company": "Photosnap",
     "logo": "./assets/images/photosnap.svg",
     "new": true,
     "featured": true,
     "position": "Senior Frontend Developer",
     "role": "Frontend",
     "level": "Senior",
     "postedAt": "1d ago",
     "contract": "Full Time",
     "location": "USA Only",
     "languages": ["HTML", "CSS", "JavaScript"],
     "tools": []
   },
   {
     "id": 2,
     "company": "Manage",
     "logo": "./assets/images/manage.svg",
     "new": true,
     "featured": true,
     "position": "Fullstack Developer",
     "role": "Fullstack",
     "level": "Midweight",
     "postedAt": "1d ago",
     "contract": "Part Time",
     "location": "Remote",
     "languages": ["Python"],
     "tools": ["React"]
   },
   {
     "id": 3,
     "company": "Account",
     "logo": "./assets/images/account.svg",
     "new": true,
     "featured": false,
     "position": "Junior Frontend Developer",
     "role": "Frontend",
     "level": "Junior",
     "postedAt": "2d ago",
     "contract": "Part Time",
     "location": "USA Only",
     "languages": ["JavaScript"],
     "tools": ["React", "Sass"]
   },
   {
     "id": 4,
     "company": "MyHome",
     "logo": "./assets/images/myhome.svg",
     "new": false,
     "featured": false,
     "position": "Junior Frontend Developer",
     "role": "Frontend",
     "level": "Junior",
     "postedAt": "5d ago",
     "contract": "Contract",
     "location": "USA Only",
     "languages": ["CSS", "JavaScript"],
     "tools": []
   },
   {
     "id": 5,
     "company": "Loop Studios",
     "logo": "./assets/images/loop-studios.svg",
     "new": false,
     "featured": false,
     "position": "Software Engineer",
     "role": "FullStack",
     "level": "Midweight",
     "postedAt": "1w ago",
     "contract": "Full Time",
     "location": "Worldwide",
     "languages": ["JavaScript"],
     "tools": ["Ruby", "Sass"]
   },
   {
     "id": 6,
     "company": "FaceIt",
     "logo": "./assets/images/faceit.svg",
     "new": false,
     "featured": false,
     "position": "Junior Backend Developer",
     "role": "Backend",
     "level": "Junior",
     "postedAt": "2w ago",
     "contract": "Full Time",
     "location": "UK Only",
     "languages": ["Ruby"],
     "tools": ["RoR"]
   },
   {
     "id": 7,
     "company": "Shortly",
     "logo": "./assets/images/shortly.svg",
     "new": false,
     "featured": false,
     "position": "Junior Developer",
     "role": "Frontend",
     "level": "Junior",
     "postedAt": "2w ago",
     "contract": "Full Time",
     "location": "Worldwide",
     "languages": ["HTML", "JavaScript"],
     "tools": ["Sass"]
   },
   {
     "id": 8,
     "company": "Insure",
     "logo": "./assets/images/insure.svg",
     "new": false,
     "featured": false,
     "position": "Junior Frontend Developer",
     "role": "Frontend",
     "level": "Junior",
     "postedAt": "2w ago",
     "contract": "Full Time",
     "location": "USA Only",
     "languages": ["JavaScript"],
     "tools": ["Vue", "Sass"]
   },
   {
     "id": 9,
     "company": "Eyecam Co.",
     "logo": "./assets/images/eyecam-co.svg",
     "new": false,
     "featured": false,
     "position": "Full Stack Engineer",
     "role": "Fullstack",
     "level": "Midweight",
     "postedAt": "3w ago",
     "contract": "Full Time",
     "location": "Worldwide",
     "languages": ["JavaScript", "Python"],
     "tools": ["Django"]
   },
   {
     "id": 10,
     "company": "The Air Filter Company",
     "logo": "./assets/images/the-air-filter-company.svg",
     "new": false,
     "featured": false,
     "position": "Front-end Dev",
     "role": "Frontend",
     "level": "Junior",
     "postedAt": "1mo ago",
     "contract": "Part Time",
     "location": "Worldwide",
     "languages": ["JavaScript"],
     "tools": ["React", "Sass"]
   }
 ]
    const domStrings = {
        container:  document.getElementById('main_container'),
        input: document.getElementById('inputFilter')
    }
const showJobLists = (list, place) => {
     list.map(item => {
     const element = ` <article class="card desktop-ver">
            <div class="column cl-first">
                <div class="column align-center">
                    <img class="logo" src=${item.logo} alt="company logo">
                </div>
                <div class="column">
                    <div class="row">
                        <span class="color-g">${item.company}</span>
                        ${item.new ? '<span class="rounded-box cl-g">New!</span>' : ''}
                        ${item.featured ? '<span class="rounded-box cl-b">Featured</span>' : '' } 
                    </div>
                    <div class="row">
                        <h3>${item.position}</h3>
                    </div>
                    <div class="row">
                        <span class="dot-after">${item.postedAt}</span>
                        <span class="dot-after">${item.contract}</span>
                        <span>${item.location}</span>
                    </div>
                </div>
            </div>
            <span class="line"></span>
            <div class="column cl-last">
            
                <span class="rect">${item.role}</span>
                <span class="rect">${item.level}</span>
                ${item.languages.map(item => {
                    return `<span class="rect">${item}</span>`
                }).join(' ')}
                ${item.tools.length <= 0 ? (item.tools.map(item => {
                    return `<span class="rect">${item.level}</span>`
                }).join(' ')) : '' }
            </div>
        </article>`;
        place.insertAdjacentHTML('beforeend' ,element);
 })
}

const filterBy = (e, list) => {
  let filterKeyword = e.target.value;
  let itemsToShowAfterFiltering = list.filter(item => {
    let tempArr = [...item.languages, ...item.tools];
    for(let i in tempArr) {
      if(tempArr[i].toLowerCase() === filterKeyword) return item;
    }
  })
  clearContainer();
  if(filterKeyword === '') showJobLists(data, domStrings.container)
  return itemsToShowAfterFiltering;
}

const clearContainer = () => {
  let stuffToClear = Array.from(document.querySelectorAll('.card'));
  stuffToClear.forEach(element => {
    element.parentNode.removeChild(element);
  })

}

const eventHandler = () => {
  domStrings.input.addEventListener('keyup', (e) => {
    let filteredItems = filterBy(e, data)
    showJobLists(filteredItems, domStrings.container)
  })
}

 return {
     init: () => {
         showJobLists(data, domStrings.container);
         eventHandler();
     }
 }
 })()

 // init application
 ctrl.init()