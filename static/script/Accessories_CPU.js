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

var cpuName = {
    "10100f": "Intel Core i3-10100f",
    "10105": "Intel Core i3-10105",
    "10105f": "Intel Core i3-10105f",
    "12100": "Intel Core i3-12100",
    "12100f": "Intel Core i3-12100f",
    "13100": "Intel Core i3-13100",
    "13100f": "Intel Core i3-13100f",
    "14100": "Intel Core i3-14100",
    "14100f": "Intel Core i3-14100f",
    "10400": "Intel Core i5-10400",
    "10400f": "Intel Core i5-10400f",
    "10500": "Intel Core i5-10500",
    "10600k": "Intel Core i5-10600k",
    "10600kf": "Intel Core i5-10600kf",
    "11400": "Intel Core i5-11400",
    "11400f": "Intel Core i5-11400f",
    "11600": "Intel Core i5-11600",
    "11600k": "Intel Core i5-11600k",
    "11600kf": "Intel Core i5-11600kf",
    "12400": "Intel Core i5-12400",
    "12400f": "Intel Core i5-12400f",
    "12500": "Intel Core i5-12500",
    "12600": "Intel Core i5-12600",
    "12600k": "Intel Core i5-12600k",
    "12600kf": "Intel Core i5-12600kf",
    "13400": "Intel Core i5-13400",
    "13400f": "Intel Core i5-13400f",
    "13500": "Intel Core i5-13500",
    "13600k": "Intel Core i5-13600k",
    "13600kf": "Intel Core i5-13600kf",
    "14400": "Intel Core i5-14400",
    "14400f": "Intel Core i5-14400f",
    "14500": "Intel Core i5-14500",
    "14600k": "Intel Core i5-14600k",
    "14600kf": "Intel Core i5-14600kf",
    "10700": "Intel Core i7-10700",
    "10700f": "Intel Core i7-10700f",
    "10700k": "Intel Core i7-10700k",
    "10700kf": "Intel Core i7-10700kf",
    "11700": "Intel Core i7-11700",
    "11700f": "Intel Core i7-11700f",
    "11700k": "Intel Core i7-11700k",
    "11700kf": "Intel Core i7-11700kf",
    "12700": "Intel Core i7-12700",
    "12700f": "Intel Core i7-12700f",
    "12700k": "Intel Core i7-12700k",
    "12700kf": "Intel Core i7-12700kf",
    "13700": "Intel Core i7-13700",
    "13700f": "Intel Core i7-13700f",
    "13700k": "Intel Core i7-13700k",
    "13700kf": "Intel Core i7-13700kf",
    "14700": "Intel Core i7-14700",
    "14700f": "Intel Core i7-14700f",
    "14700k": "Intel Core i7-14700k",
    "14700kf": "Intel Core i7-14700kf",
    "10900": "Intel Core i9-10900",
    "10900f": "Intel Core i9-10900f",
    "10900k": "Intel Core i9-10900k",
    "10900kf": "Intel Core i9-10900kf",
    "11900": "Intel Core i9-11900",
    "11900f": "Intel Core i9-11900f",
    "11900k": "Intel Core i9-11900k",
    "11900kf": "Intel Core i9-11900kf",
    "12900": "Intel Core i9-12900",
    "12900f": "Intel Core i9-12900f",
    "12900k": "Intel Core i9-12900k",
    "12900kf": "Intel Core i9-12900kf",
    "13900": "Intel Core i9-13900",
    "13900f": "Intel Core i9-13900f",
    "13900k": "Intel Core i9-13900k",
    "13900kf": "Intel Core i9-13900kf",
    "13900ks": "Intel Core i9-13900ks",
    "14900": "Intel Core i9-14900",
    "14900f": "Intel Core i9-14900f",
    "14900k": "Intel Core i9-14900k",
    "14900kf": "Intel Core i9-14900kf",
    "1200": "AMD Ryzen 3 1200",
    "1300x": "AMD Ryzen 3 1300x",
    "1200af": "AMD Ryzen 3 1200af",
    "2300x": "AMD Ryzen 3 2300x",
    "3100": "AMD Ryzen 3 3100",
    "3300x": "AMD Ryzen 3 3300x",
    "3500": "AMD Ryzen 3 3500",
    "3500x": "AMD Ryzen 3 3500x",
    "1400": "AMD Ryzen 5 1400",
    "1500x": "AMD Ryzen 5 1500x",
    "1600": "AMD Ryzen 5 1600",
    "1600x": "AMD Ryzen 5 1600x",
    "1600af": "AMD Ryzen 5 1600af",
    "2600": "AMD Ryzen 5 2600",
    "2600x": "AMD Ryzen 5 2600x",
    "3600": "AMD Ryzen 5 3600",
    "3600x": "AMD Ryzen 5 3600x",
    "5500": "AMD Ryzen 5 5500",
    "5600": "AMD Ryzen 5 5600",
    "5600x": "AMD Ryzen 5 5600x",
    "7500f": "AMD Ryzen 5 7500f",
    "7600": "AMD Ryzen 5 7600",
    "7600x": "AMD Ryzen 5 7600x",
    "1700": "AMD Ryzen 7 1700",
    "1700x": "AMD Ryzen 7 1700x",
    "1800x": "AMD Ryzen 7 1800x",
    "2700": "AMD Ryzen 7 2700",
    "2700x": "AMD Ryzen 7 2700x",
    "3700x": "AMD Ryzen 7 3700x",
    "3800x": "AMD Ryzen 7 3800x",
    "3800xt": "AMD Ryzen 7 3800xt",
    "5700x": "AMD Ryzen 7 5700x",
    "5800": "AMD Ryzen 7 5800",
    "5800x": "AMD Ryzen 7 5800x",
    "5800x3d": "AMD Ryzen 7 5800x3d",
    "7700": "AMD Ryzen 7 7700",
    "7700x": "AMD Ryzen 7 7700x",
    "7800x3d": "AMD Ryzen 7 7800x3d",
    "3900x": "AMD Ryzen 9 3900x",
    "3900xt": "AMD Ryzen 9 3900xt",
    "3950x": "AMD Ryzen 9 3950x",
    "5900": "AMD Ryzen 9 5900",
    "5900x": "AMD Ryzen 9 5900x",
    "5950x": "AMD Ryzen 9 5950x",
    "7900": "AMD Ryzen 9 7900",
    "7900x": "AMD Ryzen 9 7900x",
    "7900x3d": "AMD Ryzen 9 7900x3d",
    "7950x": "AMD Ryzen 9 7950x",
    "7950x3d": "AMD Ryzen 9 7950x3d",
};

var cpuSocket = {
    "10gen": "lga1200",
    "11gen": "lga1200",
    "12gen": "lga1700ddr4",
    "13gen": "lga1700ddr4",
    "14gen": "lga1700ddr5",
    "zen": "am4",
    "zen+": "am4",
    "zen2": "am4",
    "zen3": "am4",
    "zen4": "am5"
}

function showCPU(brand) {
    var Buttons_cpuDiv = document.getElementById("Buttons_cpu");
    Buttons_cpuDiv.innerHTML = "";
    Buttons_cpuDiv.classList.add("buttons-cpu-container"); // Добавляем класс для контейнера

    Object.keys(cpuData[brand]).forEach(cpu => {
        var btn = document.createElement("button_cpu");
        btn.className = "btn_cpu";
        btn.textContent = cpu;
        btn.onclick = function() { showCPUgen(brand, cpu); };
        Buttons_cpuDiv.appendChild(btn);
    });
    selectedCPU = "";
}

function showCPUgen(brand, cpu) {
    var Info_cpuDiv = document.getElementById("Buttons_cpu");
    Info_cpuDiv.innerHTML = "";
    Info_cpuDiv.classList.add("buttons-cpu-container"); // Добавляем класс для контейнера

    Object.keys(cpuData[brand][cpu]).forEach(gen => {
        var btn = document.createElement("button_cpu");
        btn.className = "btn_cpu";
        btn.textContent = gen;
        btn.onclick = function() { showCPUmodel(brand, cpu, gen); };
        Info_cpuDiv.appendChild(btn);
    });

    selectedCPU = cpu;
}

function showCPUmodel(brand, cpu, gen) {
    var Info_cpuDiv = document.getElementById("Buttons_cpu");
    Info_cpuDiv.innerHTML = "";
    Info_cpuDiv.classList.add("buttons-cpu-container"); // Добавляем класс для контейнера

    Object.keys(cpuData[brand][cpu][gen]).forEach(model => {
        var btn = document.createElement("button_cpu");
        btn.className = "btn_cpu";
        btn.textContent = model;
        btn.onclick = function() { showCPUprice(brand, cpu, gen, model); };
        Info_cpuDiv.appendChild(btn);
    });
    showMB(brand, cpuSocket[gen]);
    selectedCPU = gen;
}

function showCPUprice(brand, cpu, gen, model) {
    var price = cpuData[brand][cpu][gen][model]["price"];
    var socket = cpuData[brand][cpu][gen][model]["socket"]
    var modelDescription = cpuName[model]; // Получаем описание модели из словаря
    var Info_cpuDiv = document.getElementById("Buttons_cpu");

    selectedCPU = model;

    Info_cpuDiv.innerHTML = "";
    document.getElementById("selectedText1_cpu").textContent = modelDescription;
    document.getElementById("selectedText2_cpu").textContent = `${price} ₽`;
}

function mb_cpu(cpu_brand) {
    showCPU(cpu_brand);
    document.getElementById("Buttons_mb").textContent = "Сперва выберите процессор";
    document.getElementById("selectedText1_mb").textContent = "";
    document.getElementById("selectedText2_mb").textContent = "";
}



var Intel_Button_CPU = document.getElementById("Intel_Button_CPU");
var AMD_Button_CPU = document.getElementById("AMD_Button_CPU");

Intel_Button_CPU.addEventListener("click", function() {
    this.classList.add("button-pressed-intel-cpu"); // Добавляем класс к нажатой кнопке
    AMD_Button_CPU.classList.remove("button-pressed-amd-cpu"); // Удаляем класс с другой кнопки
    document.getElementById("selectedText1_cpu").textContent = "";
    document.getElementById("selectedText2_cpu").textContent = "";
    mb_cpu("intel");
});

AMD_Button_CPU.addEventListener("click", function() {
    this.classList.add("button-pressed-amd-cpu"); // Добавляем класс к нажатой кнопке
    Intel_Button_CPU.classList.remove("button-pressed-intel-cpu"); // Удаляем класс с другой кнопки
    document.getElementById("selectedText1_cpu").textContent = "";
    document.getElementById("selectedText2_cpu").textContent = "";
    mb_cpu("amd");
});
