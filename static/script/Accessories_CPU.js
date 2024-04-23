// Объект с данными о процессорах различных брендов
var cpuData = {
    "intel": {
        "i3": {
            "10gen": {
                "10100f": {
                    "cores": 4,
                    "threads": 8,
                    "clock": 3600,
                    "cache": 6,
                    "tdp": 65,
                    "released": "10.2020",
                    "price": 7599
                },
                "10105": {
                    "name": "Intel Core i3-10105",
                    "cores": 4,
                    "threads": 8,
                    "clock": 3700,
                    "cache": 6,
                    "tdp": 65,
                    "released": "03.2021",
                    "price": 10899
                },
                "10105f": {
                    "cores": 4,
                    "threads": 8,
                    "clock": 3700,
                    "cache": 6,
                    "tdp": 65,
                    "released": "03.2021",
                    "price": 6099
                }
            },
            "12gen": {
                "12100": {
                    "cores": 4,
                    "threads": 8,
                    "clock": 3300,
                    "cache": 12,
                    "tdp": 89,
                    "released": "01.2022",
                    "price": 11799
                },
                "12100f": {
                    "cores": 4,
                    "threads": 8,
                    "clock": 3300,
                    "cache": 12,
                    "tdp": 89,
                    "released": "01.2022",
                    "price": 9999
                }
            },
            "13gen": {
                "13100": {
                    "cores": 4,
                    "threads": 8,
                    "clock": 3400,
                    "cache": 12,
                    "tdp": 89,
                    "released": "01.2023",
                    "price": 13199
                },
                "13100f": {
                    "cores": 4,
                    "threads": 8,
                    "clock": 3400,
                    "cache": 12,
                    "tdp": 89,
                    "released": "01.2023",
                    "price": 10399
                }
            },
            "14gen": {
                "14100": {
                    "cores": 4,
                    "threads": 8,
                    "clock": 3500,
                    "cache": 12,
                    "tdp": 110,
                    "released": "01.2024",
                    "price": 16499
                },
                "14100f": {
                    "cores": 4,
                    "threads": 8,
                    "clock": 3500,
                    "cache": 12,
                    "tdp": 110,
                    "released": "01.2024",
                    "price": 12999
                }
            }
        },
        "i5": {
            "10gen": {
                "10400": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 2900,
                    "cache": 12,
                    "tdp": 65,
                    "released": "04.2020",
                    "price": 14199
                },
                "10400f": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 2900,
                    "cache": 12,
                    "tdp": 65,
                    "released": "04.2020",
                    "price": 8699
                },
                "10500": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3100,
                    "cache": 12,
                    "tdp": 65,
                    "released": "04.2020",
                    "price": 16499
                },
                "10600k": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 4100,
                    "cache": 12,
                    "tdp": 125,
                    "released": "04.2020",
                    "price": 16999
                },
                "10600kf": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 4100,
                    "cache": 12,
                    "tdp": 125,
                    "released": "04.2020",
                    "price": 10999
                }
            },
            "11gen": {
                "11400": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 2600,
                    "cache": 12,
                    "tdp": 65,
                    "released": "03.2021",
                    "price": 14899
                },
                "11400f": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 2600,
                    "cache": 12,
                    "tdp": 125,
                    "released": "03.2021",
                    "price": 10999
                },
                "11600": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 2800,
                    "cache": 12,
                    "tdp": 65,
                    "released": "03.2021",
                    "price": 15999
                },
                "11600k": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3900,
                    "cache": 12,
                    "tdp": 125,
                    "released": "03.2021",
                    "price": 19599
                },
                "11600kf": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3900,
                    "cache": 12,
                    "tdp": 125,
                    "released": "03.2021",
                    "price": 16999
                }
            },
            "12gen": {
                "12400": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 2000,
                    "cache": 18,
                    "tdp": 117,
                    "released": "01.2022",
                    "price": 15999
                },
                "12400f": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 2000,
                    "cache": 18,
                    "tdp": 117,
                    "released": "01.2022",
                    "price": 13499
                },
                "12500": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3000,
                    "cache": 18,
                    "tdp": 117,
                    "released": "01.2022",
                    "price": 22799
                },
                "12600": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3300,
                    "cache": 18,
                    "tdp": 117,
                    "released": "01.2022",
                    "price": 16999
                },
                "12600k": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3700,
                    "cache": 20,
                    "tdp": 150,
                    "released": "11.2021",
                    "price": 24799
                },
                "12600kf": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3700,
                    "cache": 20,
                    "tdp": 150,
                    "released": "11.2021",
                    "price": 23499
                }
            },
            "13gen": {
                "13400": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 2500,
                    "cache": 20,
                    "tdp": 148,
                    "released": "01.2023",
                    "price": 21499
                },
                "13400f": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 2500,
                    "cache": 20,
                    "tdp": 148,
                    "released": "01.2023",
                    "price": 20799
                },
                "13500": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 2500,
                    "cache": 24,
                    "tdp": 154,
                    "released": "01.2023",
                    "price": 26999
                },
                "13600k": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3500,
                    "cache": 24,
                    "tdp": 181,
                    "released": "10.2022",
                    "price": 32299
                },
                "13600kf": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3500,
                    "cache": 24,
                    "tdp": 181,
                    "released": "10.2022",
                    "price": 31799
                }
            },
            "14gen": {
                "14400": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 2500,
                    "cache": 20,
                    "tdp": 148,
                    "released": "01.2024",
                    "price": 25999
                },
                "14400f": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 2500,
                    "cache": 20,
                    "tdp": 148,
                    "released": "01.2024",
                    "price": 22499
                },
                "14500": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 2600,
                    "cache": 24,
                    "tdp": 154,
                    "released": "01.2024",
                    "price": 28999
                },
                "14600k": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3500,
                    "cache": 24,
                    "tdp": 181,
                    "released": "10.2023",
                    "price": 35499
                },
                "14600kf": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3500,
                    "cache": 24,
                    "tdp": 181,
                    "released": "10.2023",
                    "price": 33999
                }
            }
        },
        "i7": {
            "10gen": {
                "10700": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2900,
                    "cache": 16,
                    "tdp": 65,
                    "released": "05.2020",
                    "price": 19799
                },
                "10700f": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2900,
                    "cache": 16,
                    "tdp": 65,
                    "released": "05.2020",
                    "price": 19999
                },
                "10700k": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3800,
                    "cache": 16,
                    "tdp": 125,
                    "released": "05.2020",
                    "price": 25999
                },
                "10700kf": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3800,
                    "cache": 16,
                    "tdp": 125,
                    "released": "05.2020",
                    "price": 20999
                }
            },
            "11gen": {
                "11700": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2500,
                    "cache": 16,
                    "tdp": 65,
                    "released": "03.2021",
                    "price": 22499
                },
                "11700f": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2500,
                    "cache": 16,
                    "tdp": 65,
                    "released": "03.2021",
                    "price": 20799
                },
                "11700k": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3600,
                    "cache": 16,
                    "tdp": 125,
                    "released": "03.2021",
                    "price": 30299
                },
                "11700kf": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3600,
                    "cache": 16,
                    "tdp": 125,
                    "released": "03.2021",
                    "price": 26299
                }
            },
            "12gen": {
                "12700": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2100,
                    "cache": 25,
                    "tdp": 180,
                    "released": "01.2022",
                    "price": 30499
                },
                "12700f": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2100,
                    "cache": 25,
                    "tdp": 180,
                    "released": "01.2022",
                    "price": 30999
                },
                "12700k": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3600,
                    "cache": 25,
                    "tdp": 190,
                    "released": "11.2021",
                    "price": 32499
                },
                "12700kf": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3600,
                    "cache": 25,
                    "tdp": 190,
                    "released": "11.2021",
                    "price": 31999
                }
            },
            "13gen": {
                "13700": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2100,
                    "cache": 30,
                    "tdp": 219,
                    "released": "01.2023",
                    "price": 38999
                },
                "13700f": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2100,
                    "cache": 30,
                    "tdp": 219,
                    "released": "01.2023",
                    "price": 37499
                },
                "13700k": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3400,
                    "cache": 30,
                    "tdp": 253,
                    "released": "10.2022",
                    "price": 42799
                },
                "13700kf": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3400,
                    "cache": 30,
                    "tdp": 253,
                    "released": "10.2022",
                    "price": 38999
                }
            },
            "14gen": {
                "14700": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2100,
                    "cache": 33,
                    "tdp": 219,
                    "released": "01.2024",
                    "price": 46999
                },
                "14700f": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2100,
                    "cache": 33,
                    "tdp": 219,
                    "released": "01.2024",
                    "price": 45999
                },
                "14700k": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3400,
                    "cache": 33,
                    "tdp": 253,
                    "released": "10.2023",
                    "price": 50999
                },
                "14700kf": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3400,
                    "cache": 33,
                    "tdp": 253,
                    "released": "10.2023",
                    "price": 49999
                }
            }
        },
        "i9": {
            "10gen": {
                "10900": {
                    "cores": 10,
                    "threads": 20,
                    "clock": 2800,
                    "cache": 20,
                    "tdp": 65,
                    "released": "04.2020",
                    "price": 29999
                },
                "10900f": {
                    "cores": 10,
                    "threads": 20,
                    "clock": 2800,
                    "cache": 20,
                    "tdp": 65,
                    "released": "04.2020",
                    "price": 29999
                },
                "10900k": {
                    "cores": 10,
                    "threads": 20,
                    "clock": 3700,
                    "cache": 20,
                    "tdp": 125,
                    "released": "04.2020",
                    "price": 35799
                },
                "10900kf": {
                    "cores": 10,
                    "threads": 20,
                    "clock": 3700,
                    "cache": 20,
                    "tdp": 125,
                    "released": "04.2020",
                    "price": 35999
                }
            },
            "11gen": {
                "11900": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2500,
                    "cache": 16,
                    "tdp": 65,
                    "released": "03.2021",
                    "price": 28799
                },
                "11900f": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2500,
                    "cache": 16,
                    "tdp": 65,
                    "released": "03.2021",
                    "price": 24999
                },
                "11900k": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3500,
                    "cache": 16,
                    "tdp": 125,
                    "released": "03.2021",
                    "price": 26999
                },
                "11900kf": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3500,
                    "cache": 16,
                    "tdp": 125,
                    "released": "03.2021",
                    "price": 25299
                }
            },
            "12gen": {
                "12900": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2400,
                    "cache": 30,
                    "tdp": 202,
                    "released": "01.2022",
                    "price": 35499
                },
                "12900f": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2400,
                    "cache": 30,
                    "tdp": 202,
                    "released": "01.2022",
                    "price": 42499
                },
                "12900k": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3200,
                    "cache": 30,
                    "tdp": 241,
                    "released": "11.2021",
                    "price": 43799
                },
                "12900kf": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3200,
                    "cache": 30,
                    "tdp": 241,
                    "released": "11.2021",
                    "price": 41499
                }
            },
            "13gen": {
                "13900": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2000,
                    "cache": 36,
                    "tdp": 219,
                    "released": "01.2023",
                    "price": 55999
                },
                "13900f": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2000,
                    "cache": 36,
                    "tdp": 219,
                    "released": "01.2023",
                    "price": 58799
                },
                "13900k": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3000,
                    "cache": 36,
                    "tdp": 253,
                    "released": "10.2022",
                    "price": 61999
                },
                "13900kf": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3000,
                    "cache": 36,
                    "tdp": 253,
                    "released": "10.2022",
                    "price": 60999
                },
                "13900ks": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3200,
                    "cache": 36,
                    "tdp": 253,
                    "released": "01.2023",
                    "price": 82499
                }
            },
            "14gen": {
                "14900": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2000,
                    "cache": 36,
                    "tdp": 219,
                    "released": "01.2024",
                    "price": 64999
                },
                "14900f": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 2000,
                    "cache": 36,
                    "tdp": 219,
                    "released": "01.2024",
                    "price": 60999
                },
                "14900k": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3200,
                    "cache": 36,
                    "tdp": 253,
                    "released": "10.2023",
                    "price": 72999
                },
                "14900kf": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3200,
                    "cache": 36,
                    "tdp": 253,
                    "released": "10.2023",
                    "price": 64999
                }
            }
        }
    },
    "amd": {
        "r3": {
            "zen": {
                "1200": {
                    "cores": 4,
                    "threads": 4,
                    "clock": 3100,
                    "cache": 8,
                    "tdp": 65,
                    "released": "07.2017",
                    "price": 2599
                },
                "1300x": {
                    "cores": 4,
                    "threads": 4,
                    "clock": 3500,
                    "cache": 8,
                    "tdp": 65,
                    "released": "07.2017",
                    "price": 2999
                }
            },
            "zen+": {
                "1200af": {
                    "cores": 4,
                    "threads": 4,
                    "clock": 3100,
                    "cache": 8,
                    "tdp": 65,
                    "released": "09.2018",
                    "price": 2599
                },
                "2300x": {
                    "cores": 4,
                    "threads": 4,
                    "clock": 3500,
                    "cache": 8,
                    "tdp": 65,
                    "released": "09.2018",
                    "price": 2999
                }
            },
            "zen2": {
                "3100": {
                    "cores": 4,
                    "threads": 8,
                    "clock": 3600,
                    "cache": 16,
                    "tdp": 65,
                    "released": "04.2020",
                    "price": 3999
                },
                "3300x": {
                    "cores": 4,
                    "threads": 8,
                    "clock": 3800,
                    "cache": 16,
                    "tdp": 65,
                    "released": "04.2020",
                    "price": 4999
                },
                "3500": {
                    "cores": 6,
                    "threads": 6,
                    "clock": 3600,
                    "cache": 16,
                    "tdp": 65,
                    "released": "09.2019",
                    "price": 3999
                },
                "3500x": {
                    "cores": 6,
                    "threads": 6,
                    "clock": 3600,
                    "cache": 32,
                    "tdp": 65,
                    "released": "09.2019",
                    "price": 4499
                }
            }
        },
        "r5": {
            "zen": {
                "1400": {
                    "cores": 4,
                    "threads": 8,
                    "clock": 3200,
                    "cache": 8,
                    "tdp": 65,
                    "released": "04.2017",
                    "price": 2999
                },
                "1500x": {
                    "cores": 4,
                    "threads": 8,
                    "clock": 3500,
                    "cache": 16,
                    "tdp": 65,
                    "released": "04.2017",
                    "price": 2999
                },
                "1600": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3200,
                    "cache": 16,
                    "tdp": 65,
                    "released": "04.2017",
                    "price": 3499
                },
                "1600x": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3600,
                    "cache": 16,
                    "tdp": 95,
                    "released": "04.2017",
                    "price": 3999
                }
            },
            "zen+": {
                "1600af": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3100,
                    "cache": 16,
                    "tdp": 45,
                    "released": "09.2018",
                    "price": 3999
                },
                "2600": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3400,
                    "cache": 16,
                    "tdp": 65,
                    "released": "04.2018",
                    "price": 4499
                },
                "2600x": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3600,
                    "cache": 16,
                    "tdp": 95,
                    "released": "04.2018",
                    "price": 4999
                }
            },
            "zen2": {
                "3600": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3600,
                    "cache": 32,
                    "tdp": 65,
                    "released": "07.2019",
                    "price": 8999
                },
                "3600x": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3800,
                    "cache": 32,
                    "tdp": 95,
                    "released": "07.2019",
                    "price": 9799
                }
            },
            "zen3": {
                "5500": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3600,
                    "cache": 16,
                    "tdp": 65,
                    "released": "04.2022",
                    "price": 9199
                },
                "5600": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3500,
                    "cache": 32,
                    "tdp": 65,
                    "released": "04.2022",
                    "price": 10999
                },
                "5600x": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3700,
                    "cache": 32,
                    "tdp": 65,
                    "released": "11.2020",
                    "price": 14499
                }
            },
            "zen4": {
                "7500f": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3700,
                    "cache": 32,
                    "tdp": 65,
                    "released": "07.2023",
                    "price": 18499
                },
                "7600": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 3800,
                    "cache": 32,
                    "tdp": 65,
                    "released": "01.2023",
                    "price": 19999
                },
                "7600x": {
                    "cores": 6,
                    "threads": 12,
                    "clock": 4700,
                    "cache": 32,
                    "tdp": 105,
                    "released": "09.2022",
                    "price": 22999
                }
            }
        },
        "r7": {
            "zen": {
                "1700": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3000,
                    "cache": 16,
                    "tdp": 65,
                    "released": "03.2017",
                    "price": 3499
                },
                "1700x": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3400,
                    "cache": 16,
                    "tdp": 95,
                    "released": "03.2017",
                    "price": 3999
                },
                "1800x": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3600,
                    "cache": 16,
                    "tdp": 95,
                    "released": "03.2017",
                    "price": 5999
                }
            },
            "zen+": {
                "2700": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3200,
                    "cache": 16,
                    "tdp": 65,
                    "released": "09.2018",
                    "price": 4999
                },
                "2700x": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3700,
                    "cache": 16,
                    "tdp": 105,
                    "released": "04.2018",
                    "price": 5999
                }
            },
            "zen2": {
                "3700x": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3600,
                    "cache": 32,
                    "tdp": 65,
                    "released": "07.2019",
                    "price": 13999
                },
                "3800x": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3900,
                    "cache": 32,
                    "tdp": 105,
                    "released": "07.2019",
                    "price": 19999
                },
                "3800xt": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3900,
                    "cache": 32,
                    "tdp": 105,
                    "released": "07.2020",
                    "price": 20999
                }
            },
            "zen3": {
                "5700x": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3400,
                    "cache": 32,
                    "tdp": 65,
                    "released": "04.2022",
                    "price": 17799
                },
                "5800": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3400,
                    "cache": 32,
                    "tdp": 65,
                    "released": "01.2021",
                    "price": 19899
                },
                "5800x": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3800,
                    "cache": 32,
                    "tdp": 105,
                    "released": "11.2020",
                    "price": 20999
                },
                "5800x3d": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3400,
                    "cache": 96,
                    "tdp": 105,
                    "released": "04.2022",
                    "price": 39299
                }
            },
            "zen4": {
                "7700": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 3800,
                    "cache": 32,
                    "tdp": 65,
                    "released": "01.2023",
                    "price": 32299
                },
                "7700x": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 4500,
                    "cache": 32,
                    "tdp": 105,
                    "released": "09.2022",
                    "price": 38499
                },
                "7800x3d": {
                    "cores": 8,
                    "threads": 16,
                    "clock": 4200,
                    "cache": 96,
                    "tdp": 120,
                    "released": "04.2023",
                    "price": 39999
                }
            }
        },
        "r9": {
            "zen2": {
                "3900x": {
                    "cores": 12,
                    "threads": 24,
                    "clock": 3800,
                    "cache": 64,
                    "tdp": 105,
                    "released": "07.2019",
                    "price": 21999
                },
                "3900xt": {
                    "cores": 12,
                    "threads": 24,
                    "clock": 3800,
                    "cache": 64,
                    "tdp": 105,
                    "released": "07.2020",
                    "price": 23999
                },
                "3950x": {
                    "cores": 16,
                    "threads": 32,
                    "clock": 3500,
                    "cache": 64,
                    "tdp": 105,
                    "released": "11.2019",
                    "price": 30999
                }
            },
            "zen3": {
                "5900": {
                    "cores": 12,
                    "threads": 24,
                    "clock": 3000,
                    "cache": 64,
                    "tdp": 65,
                    "released": "01.2021",
                    "price": 30999
                },
                "5900x": {
                    "cores": 12,
                    "threads": 24,
                    "clock": 3700,
                    "cache": 64,
                    "tdp": 105,
                    "released": "11.2020",
                    "price": 33999
                },
                "5950x": {
                    "cores": 16,
                    "threads": 32,
                    "clock": 3400,
                    "cache": 64,
                    "tdp": 105,
                    "released": "11.2020",
                    "price": 47499
                }
            },
            "zen4": {
                "7900": {
                    "cores": 12,
                    "threads": 24,
                    "clock": 3700,
                    "cache": 64,
                    "tdp": 65,
                    "released": "01.2023",
                    "price": 46999
                },
                "7900x": {
                    "cores": 12,
                    "threads": 24,
                    "clock": 4700,
                    "cache": 64,
                    "tdp": 170,
                    "released": "09.2022",
                    "price": 46999
                },
                "7900x3d": {
                    "cores": 12,
                    "threads": 24,
                    "clock": 4400,
                    "cache": 128,
                    "tdp": 120,
                    "released": "01.2023",
                    "price": 55999
                },
                "7950x": {
                    "cores": 16,
                    "threads": 32,
                    "clock": 4500,
                    "cache": 64,
                    "tdp": 170,
                    "released": "09.2022",
                    "price": 55999
                },
                "7950x3d": {
                    "cores": 16,
                    "threads": 32,
                    "clock": 4200,
                    "cache": 128,
                    "tdp": 120,
                    "released": "01.2023",
                    "price": 55999
                }
            }
        }
    }
};


function showCPUs(brand) {
    var Buttons_cpuDiv = document.getElementById("Buttons_cpu");
    Buttons_cpuDiv.innerHTML = "";
    Buttons_cpuDiv.classList.add("buttons-cpu-container"); // Добавляем класс для контейнера

    Object.keys(cpuData[brand]).forEach(cpu => {
        var btn = document.createElement("button_cpu");
        btn.className = "btn_cpu";
        btn.textContent = cpu;
        btn.onclick = function() { showGenerations(brand, cpu); };
        Buttons_cpuDiv.appendChild(btn);
    });

    selectedCPU = "";
    document.getElementById("Info_cpu").innerHTML = "";
}

function showGenerations(brand, cpu) {
    var Info_cpuDiv = document.getElementById("Info_cpu");
    Info_cpuDiv.innerHTML = "";
    Info_cpuDiv.classList.add("buttons-cpu-container"); // Добавляем класс для контейнера

    Object.keys(cpuData[brand][cpu]).forEach(gen => {
        var btn = document.createElement("button_cpu");
        btn.className = "btn_cpu";
        btn.textContent = gen;
        btn.onclick = function() { showModels(brand, cpu, gen); };
        Info_cpuDiv.appendChild(btn);
    });

    selectedCPU = cpu;
}

function showModels(brand, cpu, gen) {
    var Info_cpuDiv = document.getElementById("Info_cpu");
    Info_cpuDiv.innerHTML = "";
    Info_cpuDiv.classList.add("buttons-cpu-container"); // Добавляем класс для контейнера

    Object.keys(cpuData[brand][cpu][gen]).forEach(model => {
        var btn = document.createElement("button_cpu");
        btn.className = "btn_cpu";
        btn.textContent = model;
        btn.onclick = function() { showPrice(brand, cpu, gen, model); };
        Info_cpuDiv.appendChild(btn);
    });

    selectedCPU = gen;
}

function showPrice(brand, cpu, gen, model) {
    var price = cpuData[brand][cpu][gen][model]["price"];
    var modelDescription = cpuData[brand][cpu][gen][model]["name"]; // Получаем описание модели из словаря

    selectedCPU = model;

    document.getElementById("selectedText1_cpu").textContent = modelDescription;
    document.getElementById("selectedText2_cpu").textContent = `${price} ₽`;
}



var Intel_Button_CPU = document.getElementById("Intel_Button_CPU");
var AMD_Button_CPU = document.getElementById("AMD_Button_CPU");

Intel_Button_CPU.addEventListener("click", function() {
    this.classList.add("button-pressed-intel-cpu"); // Добавляем класс к нажатой кнопке
    AMD_Button_CPU.classList.remove("button-pressed-amd-cpu"); // Удаляем класс с другой кнопки
});

AMD_Button_CPU.addEventListener("click", function() {
    this.classList.add("button-pressed-amd-cpu"); // Добавляем класс к нажатой кнопке
    Intel_Button_CPU.classList.remove("button-pressed-intel-cpu"); // Удаляем класс с другой кнопки
});
