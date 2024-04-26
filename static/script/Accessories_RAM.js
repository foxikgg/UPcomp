var ssdData = {
    "ddr4": {
        "8": {
            "2666": {
                "kingston": 2250
            },
            "3200": {
                "gskill": 1899,
                "kingston": 2499,
                "xpg": 2250
            },
            "3600": {
                "kingston": 3799,
                "xpg": 2050
            }
        },
        "16": {
            "2666": {
                "kingston": 4399
            },
            "3200": {
                "gskill": 3599,
                "kingston": 4599,
                "xpg": 4099
            },
            "3600": {
                "kingston": 4899,
                "xpg": 3999
            }
        },
        "32": {
            "2666": {
                "kingston": 7799
            },
            "3200": {
                "gskill": 8199,
                "kingston": 7999,
                "xpg": 7299
            },
            "3600": {
                "gskill": 10399,
                "kingston": 8999,
                "xpg": 7199
            }
        },
        "64": {
            "2666": {
                "kingston": 16699
            },
            "3200": {
                "gskill": 17499,
                "kingston": 15499,
                "xpg": 15499
            },
            "3600": {
                "kingston": 20499,
                "xpg": 17799
            }
        }
    },
    "ddr5": {
        "8": {
            "5600": {
                "kingston": 3899
            },
            "6000": {
                "kingston": 5399
            }
        },
        "16": {
            "5600": {
                "kingston": 7799,
                "xpg": 6099
            },
            "6000": {
                "kingston": 8999,
                "xpg": 6599
            },
            "7600": {
                "kingston": 2499
            }
        },
        "32": {
            "5600": {
                "gskill": 12799,
                "kingston": 13299,
                "xpg": 9999
            },
            "6000": {
                "gskill": 13999,
                "kingston": 13999,
                "xpg": 12999
            },
            "7200": {
                "kingston": 25399,
                "xpg": 26799
            }
        },
        "64": {
            "5600": {
                "gskill": 25499,
                "kingston": 26999,
                "xpg": 24599
            },
            "6000": {
                "gskill": 27999,
                "kingston": 27199,
                "xpg": 24499
            },
            "6400": {
                "xpg": 28999
            }
        }
    }
}


function showSSDgb(type) {
    var Buttons_ssdDiv = document.getElementById("Buttons_ram");
    Buttons_ssdDiv.innerHTML = "";
    Buttons_ssdDiv.classList.add("buttons-ssd-container"); // Добавляем класс для контейнера

    Object.keys(ssdData[type]).forEach(gb => {
        var btn = document.createElement("button_ram");
        btn.className = "btn_cpu";
        btn.textContent = gb;
        btn.onclick = function() { showSSDspeed(type, gb); };
        Buttons_ssdDiv.appendChild(btn);
    });
}

function showSSDspeed(type, gb) {
    var Info_ssdDiv = document.getElementById("Buttons_ram");
    Info_ssdDiv.innerHTML = "";
    Info_ssdDiv.classList.add("buttons-ssd-container"); // Добавляем класс для контейнера

    Object.keys(ssdData[type][gb]).forEach(speed => {
        var btn = document.createElement("button_ram");
        btn.className = "btn_cpu";
        btn.textContent = speed;
        btn.onclick = function() { showSSDmanufacturer(type, gb, speed); };
        Info_ssdDiv.appendChild(btn);
    });

}

function showSSDmanufacturer(type, gb, speed) {
    var Info_ssdDiv = document.getElementById("Buttons_ram");
    Info_ssdDiv.innerHTML = "";
    Info_ssdDiv.classList.add("buttons-ssd-container"); // Добавляем класс для контейнера

    Object.keys(ssdData[type][gb][speed]).forEach(manufacturer => {
        var btn = document.createElement("button_ram");
        btn.className = "btn_cpu";
        btn.textContent = manufacturer;
        btn.onclick = function() { showSSDprice(type, gb, speed, manufacturer); };
        Info_ssdDiv.appendChild(btn);
    });
}

function showSSDprice(type, gb, speed, manufacturer) {
    var price = ssdData[type][gb][speed][manufacturer]
    var name = manufacturer.toUpperCase() + ' ' + gb + 'Gb ' + speed + 'MHz ' + type
    var Info_ssdDiv = document.getElementById("Buttons_ram");
    Info_ssdDiv.innerHTML = "";
    Info_ssdDiv.classList.add("buttons-ssd-container"); // Добавляем класс для контейнера
    document.getElementById("selectedText1_ram").textContent = name;
    document.getElementById("selectedText2_ram").textContent = `${price} ₽`;
}

var ddr4_Button_RAM = document.getElementById("ddr4_Button_RAM");
var ddr5_Button_RAM = document.getElementById("ddr5_Button_RAM");

ddr4_Button_RAM.addEventListener("click", function() {
    this.classList.add("button-pressed-intel-gpu"); // Добавляем класс к нажатой кнопке
    document.getElementById("selectedText1_ram").textContent = "";
    document.getElementById("selectedText2_ram").textContent = "";
});

ddr5_Button_RAM.addEventListener("click", function() {
    this.classList.add("button-pressed-amd-gpu"); // Добавляем класс к нажатой кнопке
    ddr4_Button_RAM.classList.remove("button-pressed-intel-ram"); // Удаляем класс с другой кнопки
    document.getElementById("selectedText1_ram").textContent = "";
    document.getElementById("selectedText2_ram").textContent = "";
});
