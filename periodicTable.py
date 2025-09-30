def get_element_info(atomic_number):
    elements_data = {
        1: {'name': 'Hydrogen', 'description': 'gas'},
        2: {'name': 'Helium', 'description': 'noble gas'},
        3: {'name': 'Lithium', 'description': 'metal'},
        4: {'name': 'Beryllium', 'description': 'metal'},
        5: {'name': 'Boron', 'description': 'metalloid'},
        6: {'name': 'Carbon', 'description': 'The basis of all known life,'},
        7: {'name': 'Nitrogen', 'description': 'gas'},
        8: {'name': 'Oxygen', 'description': 'gas'},
        9: {'name': 'Fluorine', 'description': 'gas'},
        10: {'name': 'Neon', 'description': 'noble gas'},
        11: {'name': 'Sodium', 'description': 'metal'},
        12: {'name': 'Magnesium', 'description': 'metal'},
        13: {'name': 'Aluminum', 'description': 'metal'},
        14: {'name': 'Silicon', 'description': 'metalloid'},
        15: {'name': 'Phosphorus', 'description': 'gas'},
        16: {'name': 'Sulfur', 'description': 'crystalline solid'},
        17: {'name': 'Chlorine', 'description': 'gas'},
        18: {'name': 'Argon', 'description': 'noble gas'},
        19: {'name': 'Potassium', 'description': 'metal'},
        20: {'name': 'Calcium', 'description': 'metal'},
        21: {'name': 'Scandium', 'description': 'metal'},
        22: {'name': 'Titanium', 'description': 'metal'},
        23: {'name': 'Vanadium', 'description': 'metal'},
        24: {'name': 'Chromium', 'description': 'metal'},
        25: {'name': 'Manganese', 'description': 'metal'},
        26: {'name': 'Iron', 'description': "metal's core."},
        27: {'name': 'Cobalt', 'description': 'metal'},
        28: {'name': 'Nickel', 'description': 'metal'},
        29: {'name': 'Copper', 'description': 'metal'},
        30: {'name': 'Zinc', 'description': 'metal'},
        31: {'name': 'Gallium', 'description': 'metal'},
        32: {'name': 'Germanium', 'description': 'metalloid'},
        33: {'name': 'Arsenic', 'description': 'metalloid'},
        34: {'name': 'Selenium', 'description': 'nonmetal'},
        35: {'name': 'Bromine', 'description': 'liquid'},
        36: {'name': 'Krypton', 'description': 'noble gas'},
        37: {'name': 'Rubidium', 'description': 'metal'},
        38: {'name': 'Strontium', 'description': 'metal'},
        39: {'name': 'Yttrium', 'description': 'metal'},
        40: {'name': 'Zirconium', 'description': 'metal'},
        41: {'name': 'Niobium', 'description': 'metal'},
        42: {'name': 'Molybdenum', 'description': 'metal'},
        43: {'name': 'Technetium', 'description': 'metal'},
        44: {'name': 'Ruthenium', 'description': 'metal'},
        45: {'name': 'Rhodium', 'description': 'metal'},
        46: {'name': 'Palladium', 'description': 'metal'},
        47: {'name': 'Silver', 'description': 'metal'},
        48: {'name': 'Cadmium', 'description': 'metal'},
        49: {'name': 'Indium', 'description': 'metal'},
        50: {'name': 'Tin', 'description': 'metal'},
        51: {'name': 'Antimony', 'description': 'metalloid'},
        52: {'name': 'Tellurium', 'description': 'metalloid'},
        53: {'name': 'Iodine', 'description': 'nonmetal'},
        54: {'name': 'Xenon', 'description': 'noble gas'},
        55: {'name': 'Cesium', 'description': 'metal'},
        56: {'name': 'Barium', 'description': 'metal'},
        57: {'name': 'Lanthanum', 'description': 'metal'},
        58: {'name': 'Cerium', 'description': 'metal'},
        59: {'name': 'Praseodymium', 'description': 'metal'},
        60: {'name': 'Neodymium', 'description': 'metal'},
        61: {'name': 'Promethium', 'description': 'metal'},
        62: {'name': 'Samarium', 'description': 'metal'},
        63: {'name': 'Europium', 'description': 'metal'},
        64: {'name': 'Gadolinium', 'description': 'metal'},
        65: {'name': 'Terbium', 'description': 'metal'},
        66: {'name': 'Dysprosium', 'description': 'metal'},
        67: {'name': 'Holmium', 'description': 'metal'},
        68: {'name': 'Erbium', 'description': 'metal'},
        69: {'name': 'Thulium', 'description': 'metal'},
        70: {'name': 'Ytterbium', 'description': 'metal'},
        71: {'name': 'Lutetium', 'description': 'metal'},
        72: {'name': 'Hafnium', 'description': 'metal'},
        73: {'name': 'Tantalum', 'description': 'metal'},
        74: {'name': 'Tungsten', 'description': 'metal'},
        75: {'name': 'Rhenium', 'description': 'metal'},
        76: {'name': 'Osmium', 'description': 'metal'},
        77: {'name': 'Iridium', 'description': 'metal'},
        78: {'name': 'Platinum', 'description': 'metal'},
        79: {'name': 'Gold', 'description': 'metal'},
        80: {'name': 'Mercury', 'description': 'liquid'},
        81: {'name': 'Thallium', 'description': 'metal'},
        82: {'name': 'Lead', 'description': 'metal'},
        83: {'name': 'Bismuth', 'description': 'metal'},
        84: {'name': 'Polonium', 'description': 'metalloid'},
        85: {'name': 'Astatine', 'description': 'halogen gas'},
        86: {'name': 'Radon', 'description': 'noble gas'},
        87: {'name': 'Francium', 'description': 'radioactive metal'},
        88: {'name': 'Radium', 'description': 'metal'},
        89: {'name': 'Actinium', 'description': 'metal'},
        90: {'name': 'Thorium', 'description': 'metal'},
        91: {'name': 'Protactinium', 'description': 'radioactive metal'},
        92: {'name': 'Uranium', 'description': 'metal'},
        93: {'name': 'Neptunium', 'description': 'metal'},
        94: {'name': 'Plutonium', 'description': 'radioactive metal'},
        95: {'name': 'Americium', 'description': 'radioactive metal'},
        96: {'name': 'Curium', 'description': 'radioactive metal'},
        97: {'name': 'Berkelium', 'description': 'radioactive metal'},
        98: {'name': 'Californium', 'description': 'radioactive metal'},
        99: {'name': 'Einsteinium', 'description': 'radioactive metal'},
        100: {'name': 'Fermium', 'description': 'radioactive metal'},
        101: {'name': 'Mendelevium', 'description': 'radioactive metal'},
        102: {'name': 'Nobelium', 'description': 'radioactive metal'},
        103: {'name': 'Lawrencium', 'description': 'radioactive metal'},
        104: {'name': 'Rutherfordium', 'description': 'radioactive metal'},
        105: {'name': 'Dubnium', 'description': 'radioactive metal'},
        106: {'name': 'Seaborgium', 'description': 'radioactive metal'},
        107: {'name': 'Bohrium', 'description': 'radioactive metal'},
        108: {'name': 'Hassium', 'description': 'radioactive metal'},
        109: {'name': 'Meitnerium', 'description': 'radioactive metal'},
        110: {'name': 'Darmstadtium', 'description': 'radioactive metal'},
        111: {'name': 'Roentgenium', 'description': 'radioactive metal'},
        112: {'name': 'Copernicium', 'description': 'radioactive metal'},
        113: {'name': 'Nihonium', 'description': 'radioactive metal'},
        114: {'name': 'Flerovium', 'description': 'radioactive metal'},
        115: {'name': 'Moscovium', 'description': 'radioactive metal'},
        116: {'name': 'Livermorium', 'description': 'radioactive metal'},
        117: {'name': 'Tennessine', 'description': 'radioactive metal'},
        118: {'name': 'Oganesson', 'description': 'noble gas'},
    }
    
    return elements_data.get(atomic_number)


def start(atomic_num):
  if (atomic_num > 118):
    print(f"gayass on use a number from 1 to 188")
    return
  if (atomic_num < 1):
    print(f"gayass on use a number from 1 to 188")
    return
  element_info = get_element_info(atomic_num)
  print(f"Name: {element_info['name']}")
  print(f"Description: {element_info['description']}\n")


start(1)
start(2)
start(3)
start(4)
start(5)
start(6)
start(7)
start(8)
start(9)
start(10)
start(11)
start(12)
start(13)
start(14)
start(15)
start(16)
start(17)
start(18)
start(19)
start(20)
start(21)
start(22)
start(23)
start(24)
start(25)
start(26)
start(27)
start(28)
start(29)
start(30)
start(31)
start(32)
start(33)
start(34)
start(35)
start(36)
start(37)
start(38)
start(39)
start(40)
start(41)
start(42)
start(43)
start(44)
start(45)
start(46)
start(47)
start(48)
start(49)
start(50)
start(51)
start(52)
start(53)
start(54)
start(55)
start(56)
start(57)
start(58)
start(59)
start(60)
start(61)
start(62)
start(63)
start(64)
start(65)
start(66)
start(67)
start(68)
start(69)
start(70)
start(71)
start(72)
start(73)
start(74)
start(75)
start(76)
start(77)
start(78)
start(79)
start(80)
start(81)
start(82)
start(83)
start(84)
start(85)
start(86)
start(87)
start(88)
start(89)
start(90)
start(91)
start(92)
start(93)
start(94)
start(95)
start(96)
start(97)
start(98)
start(99)
start(100)
start(101)
start(102)
start(103)
start(104)
start(105)
start(106)
start(107)
start(108)
start(109)
start(110)
start(111)
start(112)
start(113)
start(114)
start(115)
start(116)
start(117)
start(118)
