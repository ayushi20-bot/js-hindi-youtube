const myObject = {
    js: 'javascript',
    py: 'python',
    cpp: 'C++',
    swift: "swift by apple"

}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "py", "cpp", "rb"]

for(const key in programming){
    console.log(programming[key]);
    
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const key of map){
    console.log(key);
    
}