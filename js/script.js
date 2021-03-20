

$(document).ready(function() {


    const fieldCodes = [
      'W', 'U', 'B', 'R', 'G'
    ];
  
    const cardTypes = [
      'topo',
      'anatra',
      'cavallo',
    
    ];
  
    const editions = {
      'GL': {
        edition: 'Gold',
        rarity: 'blue'
      },
  
      'SP': {
        edition: 'Special',
        rarity: 'red'
      }
    }
  
    const powerValues = [1, 2, 3];
  
    const cards = [
    
      {
        cardName: 'Pikachu',
        cost: {
          genericCostNumber: 1,
          costFields: [
            fieldCodes[0],
            fieldCodes[2]
          ],
        },
        picture: 'img/pikachu.jpg',
        cardType: cardTypes[0],
        cardObject: 'topo',
        editionType: editions['BL'],
        description: 'Con la sua scossa potentissima è in grado di sconfiggere qualsiasi pokem.',
        score: {
          power: 1,
          toughness: 2
        }
      },
    
      {
        cardName: 'Golduck',
        cost: {
          genericCostNumber: 2,
          costFields: [
            fieldCodes[2],
            fieldCodes[3]
          ],
        },
        picture: 'img/golduck.png',
        cardType: cardTypes[1],
        cardObject: 'anatra',
        editionType: editions['GL'],
        description: 'I laghi di tutto il regno non hanno segreti per lui',
        score: {
          power: 2,
          toughness: 3
        }
      },
    
      {
        cardName: 'Arceus',
        cost: {
          genericCostNumber: 4,
          costFields: [
            fieldCodes[5],
            fieldCodes[1]
          ],
        },
        picture: 'img/arceus.png',
        cardType: cardTypes[2],
        cardObject: 'cavallo',
        editionType: editions['SP'],
        description: 'Nessuno ha più mira di lui, anche ad occhi chiusi è in grado di centrare ogni tipo di bersaglio',
        score: {
          power: 3,
          toughness: 3
        }
      },
      
    ];
  
    console.log(cards);
    // FINE DATI -------------------------------------------------------------------------------------
  
    // LOGICA ---------------------------------------------------------------------------------------
    function filterByPower(powerValue, array){
      return array.filter((item) => {
        return item.score.power === powerValue;
      });
    }
  
    function filterByCardType(cardTypeValue, array){
      return array.filter((item) => {
        return item.cardType === cardTypeValue;
      });
    }
  
    function render(DOMitem, array) {
      const cardListItemHTML = document.getElementById(DOMitem);
      cardListItemHTML.innerHTML = '';
      array.forEach((item) => {
        cardListItemHTML.innerHTML += `
        <li>
          <div>
            <h4 style="color:red"> Nome: ${item.cardName}</h4>
            <h5> Tipo: ${item.cardType}</h5>
          </div>
        </li>
        `
      });
    }
  
    function renderSelect(DOMitem, array) {
      const select = document.getElementById(DOMitem);
      array.forEach((item) => {
        select.innerHTML += `
          <option value='${item}'>${item}</option>
        `
      });
    }
    // FINE LOGICA ----------------------------------------------------------------------------------
  
    // OUTPUT ---------------------------------------------------------------------------------------
    render('listaCarte', cards);
    renderSelect('powerSelect', powerValues);
    renderSelect('cardTypeSelect', cardTypes)
  
    $('#powerSelect').change(function() {
      if (isNaN($(this).val())) {
        alert('Scegli un valore numerico');
      } else {
        const selectValue = parseInt($(this).val());
        const filteredArray = filterByPower(selectValue, cards);
        render('listaCarte', filteredArray);
      }
    });
  
    $('#cardTypeSelect').change(function() {
        const selectValue = $(this).val();
        const filteredArray = filterByCardType(selectValue, cards);
        render('listaCarte', filteredArray);
    });
  
    $('#reset').click(function() {
      render('listaCarte', cards);
    });
    // FINE OUTPUT ----------------------------------------------------------------------------------
  });
  