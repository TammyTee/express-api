var express = require('express');
var router = express.Router();
var _ = require('underscore');

var states = [
    {
        id: 1,
        name: 'Wisconsin',
        capital: 'Madison',
        nickname: 'Badger State',
        population: '5,771,337',
        img: 'wi.png',
        desc: 'Wisconsin is a midwestern state with coastlines on 2 Great Lakes, Michigan and Superior, and an interior' +
        ' of forests and farms. Milwaukee, the largest city, is known for the Milwaukee Public Museum, with its numerous' +
        ' re-created international villages, and the Harley-Davidson Museum, displaying classic motorcycles.'
    },
    {
        id: 2,
        name: 'Illinois',
        capital: 'Springfield',
        nickname: 'Land of Lincoln',
        population: '12,859,995',
        img: 'il.png',
        desc: 'Illinois is a midwestern state bordering Indiana in the east and the Mississippi River in the west. ' +
        'Nicknamed "the Prairie State," it\'s marked by farmland, forests, rolling hills and wetlands. On Lake Michigan' +
        ' in its northeast is Chicago, one of the largest cities in the U.S. It’s famous for its skyscrapers, such as ' +
        'sleek, 1,451-ft. Willis Tower and the neo-Gothic Tribune Tower.'
    },
    {
        id: 3,
        name: 'California',
        capital: 'Sacramento',
        nickname: 'Golden State',
        population: '39,144,818',
        img: 'ca.png',
        desc: 'California, a western U.S. state, stretches from the Mexican border along the Pacific for nearly 900 ' +
        'miles. It\'s known for its dramatic terrain encompassing cliff-lined beaches, redwood forest, the Sierra ' +
        'Nevada Mountains, Central Valley farmland and the arid Mojave Desert. '
    },
    {
        id: 4,
        name: 'North Carolina',
        capital: 'Raleigh',
        nickname: 'Tar Heel State',
        population: '10,042,802',
        img: 'nc.png',
        desc: 'North Carolina is a southeastern U.S. state with a diverse landscape ranging from Atlantic Ocean beaches' +
        ' to the Appalachian mountains. Charlotte, the state’s largest city, is home to the NFL’s Carolina Panthers, ' +
        'while academia rules in the Research Triangle, comprising Raleigh (the state capital and home to N.C. State ' +
        'University), Durham (Duke University) and Chapel Hill (University of North Carolina).'
    },
    {
        id: 5,
        name: 'Texas',
        capital: 'Austin',
        nickname: 'Lone Star State',
        population: '27,469,114',
        img: 'tx.png',
        desc: 'Texas is a large state in the southern U.S. with deserts, pine forests and the Rio Grande, a river that ' +
        'forms its border with Mexico. In its biggest city, Houston, the Museum of Fine Arts houses works by well-known' +
        ' Impressionist and Renaissance painters, while Space Center Houston offers interactive displays engineered by ' +
        'NASA.'
    }
];

function getState(state_id) {
    return _.find(states, function(s) {
        return s.id == parseInt(state_id);
    });
}

router.get('/states', function(req, res, next) {
    res.json(states);
});

router.route('/states/:state_id')
    .all(function (req, res, next) {
        state_id = req.params.state_id;
        state = getState(state_id);
        next();
    })
    .get(function(req, res, next){
        res.json(state);
    });


module.exports = router;