// Base de datos de los lugares turísticos, hoteles y restaurantes
const data = {
    attractions: [
        {
            id: 1,
            name: "Machu Picchu",
            description: "La famosa ciudadela inca, una de las 7 maravillas del mundo moderno. Impresionantes vistas y arquitectura ancestral.",
            image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
            category: "historical",
            rating: 5,
            price: "Entrada: 152 PEN",
            details: "Machu Picchu es una ciudadela inca ubicada en las alturas de las montañas de los Andes en Perú, sobre el valle del río Urubamba. Se construyó en el siglo XV y luego fue abandonada. Es famosa por sus sofisticadas paredes de piedra seca que combinan bloques enormes sin el uso de mortero, los fascinantes edificios que se relacionan con las alineaciones astronómicas y sus vistas panorámicas."
        },
        {
            id: 2,
            name: "Montaña Huayna Picchu",
            description: "La montaña icónica detrás de Machu Picchu con vistas espectaculares. Requiere reserva anticipada.",
            image: "https://chaskaocupi.com/wp-content/uploads/2019/08/huaynapicchu-machupicchu.jpg",
            category: "natural",
            rating: 4.8,
            price: "Entrada: 200 PEN ",
            details: "Huayna Picchu es la montaña que aparece detrás de Machu Picchu en las fotografías clásicas. La caminata hasta su cima es desafiante pero gratificante, con vistas espectaculares de toda la ciudadela inca y el valle del Urubamba. El ascenso toma aproximadamente una hora y solo permiten 400 visitantes por día, por lo que se recomienda reservar con meses de anticipación."
        },
        {
            id: 3,
            name: "Putucusi",
            description: "Montaña con una caminata retadora y vistas espectaculares de Machu Picchu desde otro ángulo.",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/af/181_View_from_Inca_Trail_to_Sun_Gate_Machu_Picchu_Peru_2444_%2814977337529%29.jpg",
            category: "natural",
            rating: 4.7,
            price: "Gratis",
            details: "Putucusi, que significa 'montaña feliz' en quechua, ofrece una de las vistas más espectaculares de Machu Picchu desde el otro lado del valle. La caminata es bastante exigente, con escaleras empinadas y en algunos sectores escaleras de madera y cuerdas. La recompensa es una vista panorámica increíble con menos turistas que en Huayna Picchu."
        },
        {
            id: 4,
            name: "Aguas Termales",
            description: "Aguas termales naturales ideales para relajarse después del trekking. Ubicadas en el pueblo.",
            image: "https://www.machupicchuperutours.com/wp-content/uploads/aguas-calientes-3.jpg",
            category: "natural",
            rating: 4.5,
            price: "Entrada: 20 PEN",
            details: "Las aguas termales de Machu Picchu Pueblo (Aguas Calientes) son un conjunto de piscinas naturales de agua caliente que emergen de las profundidades de la tierra. Sus temperaturas varían entre 38°C y 46°C, y son ricas en minerales como calcio, magnesio y zinc. Son el lugar perfecto para relajar los músculos después de caminar por las ruinas o hacer senderismo."
        },
        {
            id: 5,
            name: "Museo de Sitio Manuel Chávez Ballón",
            description: "Museo que exhibe artefactos incas y explica la historia y construcción de Machu Picchu.",
            image: "https://www.boletomachupicchu.com/gutblt/wp-content/images/objetos-museo-manuel-chavez-ballon-machu-picchu.jpg",
            category: "cultural",
            rating: 4.2,
            price: "Entrada: 22 PEN",
            details: "Este museo ofrece una excelente introducción a la historia y cultura de Machu Picchu. Exhibe una colección de cerámicas, herramientas y otros artefactos encontrados en el sitio. Las exhibiciones explican las técnicas de construcción inca, la función de los diferentes edificios y la historia del descubrimiento de la ciudadela por Hiram Bingham en 1911."
        },
        {
            id: 6,
            name: "Inti Punku (Puerta del Sol)",
            description: "Punto de entrada tradicional al Camino Inca con vistas panorámicas espectaculares.",
            image: "https://www.willkatravel.com/wp-content/uploads/2022/05/inti-punku-puerta-del-sol.jpg",
            category: "historical",
            rating: 4.6,
            price: "Incluido en entrada Machu Picchu",
            details: "Inti Punku, o 'Puerta del Sol', es un antiguo puesto de control en el Camino Inca que ofrece la primera vista espectacular de Machu Picchu para los caminantes. Desde aquí se tiene una vista panorámica increíble de toda la ciudadela y las montañas circundantes. Es especialmente mágico al amanecer, cuando el sol ilumina gradualmente las ruinas."
        },
        {
            id: 7,
            name: "Puente Inca",
            description: "Antiguo puente de piedra construido en un acantilado, muestra de ingeniería inca.",
            image: "https://content.nationalgeographic.com.es/medio/2019/01/30/ven9422_ee7ba0c7_1200x630.jpg",
            category: "historical",
            rating: 4.3,
            price: "Incluido en entrada Machu Picchu",
            details: "El Puente Inca es una impresionante obra de ingeniería construida en un acantilado, que servía como punto de control y defensa para Machu Picchu. Está hecho de troncos que se podían retirar para impedir el acceso no deseado. El camino hacia el puente ofrece vistas espectaculares del valle y es una muestra del ingenio de los constructores incas."
        },
        {
            id: 8,
            name: "Templo de la Luna",
            description: "Sitio ceremonial oculto en una cueva en la montaña Huayna Picchu.",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/37/100_-_Machu_Picchu_-_Juin_2009.jpg",
            category: "historical",
            rating: 4.4,
            price: "Incluido en entrada Huayna Picchu",
            details: "El Templo de la Luna es una estructura ceremonial construida dentro de una cueva natural en la montaña Huayna Picchu. Contiene nichos ceremoniales, altares y escaleras talladas en la roca. Se cree que fue un lugar de adoración a las deidades lunares y de celebración de ceremonias relacionadas con el mundo espiritual. El acceso requiere una caminata adicional desde la cima de Huayna Picchu."
        }
    ],
    hotels: [
        {
            id: 1,
            name: "Belmond Sanctuary Lodge",
            description: "Hotel de lujo ubicado justo a la entrada de Machu Picchu. Servicio excepcional y vistas increíbles.",
            image: "https://img.belmond.com/f_auto/t_2580x1299/photos/mps/mps-ext02.jpg",
            category: "luxury",
            rating: 4.9,
            price: "Desde $1000/noche",
            details: "Este hotel de 5 estrellas es el único alojamiento ubicado justo a las puertas de Machu Picchu, lo que permite a sus huéspedes acceder al sitio arqueológico antes que los demás visitantes. Ofrece habitaciones elegantes con decoración inspirada en la cultura inca, un spa de primera clase, restaurante gourmet y servicio personalizado. Ideal para quienes buscan una experiencia exclusiva."
        },
        {
            id: 2,
            name: "Inkaterra Machu Picchu Pueblo Hotel",
            description: "Hotel boutique en un entorno de bosque nuboso con cabañas privadas y naturaleza exuberante.",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/21/6f/8d/entrance.jpg?w=900&h=500&s=1",
            category: "luxury",
            rating: 4.8,
            price: "Desde $600/noche",
            details: "Este eco-lujo hotel está ubicado en un entorno de bosque nuboso de 12 acres, con cabañas de adobe dispersas entre jardines exuberantes y quebradas con orquídeas. Ofrece piscinas de aguas termales, un spa con tratamientos andinos, restaurant con cocina de autor и excursiones guiadas por naturalistas. Es miembro de National Geographic Unique Lodges of the World."
        },
        {
            id: 3,
            name: "Tierra Viva Machu Picchu",
            description: "Hotel con habitaciones cómodas y ubicación céntrica. Ideal para quienes buscan comodidad a buen precio.",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295717611.jpg?k=42eb9f657d777b08d8ba251409b5cb94d008d55e96cc4a84b5f138bee2c034db&o=&hp=1",
            category: "midrange",
            rating: 4.3,
            price: "Desde $120/noche",
            details: "Ubicado a solo 5 minutos a pie de la plaza principal de Aguas Calientes, este hotel ofrece habitaciones modernas y cómodas con aire acondicionado, TV por cable y wifi gratuito. Incluye desayuno buffet con opciones locales e internacionales. Su ubicación céntrica permite fácil acceso a restaurantes, tiendas y la estación de tren."
        },
        {
            id: 4,
            name: "Hostal Viajeros",
            description: "Alojamiento económico ideal para mochileros. Ambiente juvenil y cercano a la estación de tren.",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/624802535.jpg?k=7fc5ae7122a11df739eff2c8518b3b43b40d330785fb3cf7b61c7e16cb2ec8ba&o=&hp=1",
            category: "budget",
            rating: 3.9,
            price: "Desde $30/noche",
            details: "Este hostal es popular entre mochileros y viajeros con presupuesto limitado. Ofrece habitaciones compartidas y privadas, baños comunes, cocina para huéspedes, área social con juegos de mesa y información turística. El ambiente es juvenil e internacional, perfecto para conocer otros viajeros. Está ubicado a solo 2 cuadras de la estación de tren."
        },
        {
            id: 5,
            name: "Sumaq Machu Picchu Hotel",
            description: "Hotel 5 estrellas con gastronomía de alto nivel y vistas al río Vilcanota. Experiencia de lujo única.",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/153611357.jpg?k=2bacc37143c0e23577348f6043b2c4cbdadbca1928919c105215641b0ee1dcc1&o=&hp=1",
            category: "luxury",
            rating: 4.9,
            price: "Desde $800/noche",
            details: "Este hotel de lujo combina elegancia contemporánea con elementos culturales andinos. Sus habitaciones tienen balcones con vistas al río Vilcanota o a las montañas. Destaca por su gastronomía: el restaurant Qunuq ofrece experiencias culinarias con ingredientes locales y clases de cocina peruana. El hotel también organiza ceremonias andinas privadas y tiene un spa con tratamientos tradicionales."
        },
        {
            id: 6,
            name: "Casa Andina",
            description: "Cadena hotelera peruana con comfortable alojamiento a pocos minutos de la plaza principal.",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/e0/ed/7a/casa-andina-standard.jpg?w=900&h=500&s=1",
            category: "midrange",
            rating: 4.2,
            price: "Desde $90/noche",
            details: "Parte de la cadena hotelera peruana Casa Andina, este establecimiento ofrece una relación calidad-precio excelente. Las habitaciones son espaciosas y funcionales, con decoración inspirada en la cultura local. El hotel cuenta con restaurant que sirve cocina peruana e internacional, bar, wifi gratuito en áreas comunes y servicio de guardaequipaje. Ubicado a 10 minutos a pie del centro."
        },
        {
            id: 7,
            name: "El Mapi by Inkaterra",
            description: ".",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/427171248.jpg?k=e767be6df7ece07e017132bff3126da685571967bb1384e39ec9b3270f9a7e4a&o=&hp=1",
            category: "midrange",
            rating: 4.4,
            price: "Desde $130/noche",
            details: "Este hotel ofrece un concepto moderno y ecológico, con habitaciones diseñadas con materiales sostenibles y tecnología de eficiencia energética. El restaurante ofrece cocina de fusión andina-internacional con ingredientes locales. El hotel también cuenta con un bar con cervezas artesanales y un lobby market donde los huéspedes pueden comprar productos locales."
        },
        {
            id: 8,
            name: "Gringo Bill's Hotel",
            description: "Hotel con encanto familiar, ubicado cerca del mercado artesanal y las aguas termales.",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/209745992.jpg?k=b4b3fb71d28a2937b72e7573b616154cefeeee3c972375eb34df8df5829ee005&o=&hp=1",
            category: "midrange",
            rating: 4.1,
            price: "Desde $85/noche",
            details: "Con más de 30 años de historia, este hotel familiar ofrece un ambiente acogedor y personalizado. Las habitaciones son sencillas pero cómodas, con baños privados y agua caliente. La terraza del hotel ofrece vistas a las montañas circundantes. Está ubicado a pocos pasos del mercado artesanal y a 10 minutos de las aguas termales."
        }
    ],
    restaurants: [
        {
            id: 1,
            name: "Tinkuy Buffet Restaurant",
            description: "Restaurante buffet en Belmond Sanctuary Lodge con cocina internacional y platos peruanos gourmet.",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/37/46/8d/ample-windows-allow-guests.jpg?w=900&h=500&s=1",
            category: "international",
            rating: 4.7,
            price: "Precio medio: $40",
            details: "Ubicado dentro del Belmond Sanctuary Lodge, este restaurante ofrece un buffet de alta gama con una amplia variedad de platos internacionales y peruanos. Destacan sus ceviches, anticuchos, y especialidades andinas preparadas con ingredientes locales de primera calidad. El ambiente es elegante y las mesas junto a las ventanas ofrecen vistas espectaculares de las montañas. Ideal para un almuerzo especial después de visitar Machu Picchu."
        },
        {
            id: 2,
            name: "Café Inkaterra",
            description: "Encantador restaurante con terraza y cocina peruana fusión. Ambiente romántico y servicio excelente.",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/a9/69/02/cafe-inkaterra.jpg?w=900&h=500&s=1",
            category: "peruvian",
            rating: 4.6,
            price: "Precio medio: $30",
            details: "Este encantador restaurante forma parte del Inkaterra Machu Picchu Pueblo Hotel. Tiene una terraza al aire libre rodeada de vegetación donde se puede disfrutar del canto de los pájaros. La carta fusiona ingredientes andinos con técnicas contemporáneas, destacando platos como el lomo saltado, quinoa con mariscos y postres con chocolate local. La carta de cocktails incluye pisco sour y chilcano de pisco."
        },
        {
            id: 3,
            name: "Mapacho Craft Beer Restaurant",
            description: "Restaurante con cerveza artesanal y comida peruana moderna. Ambiente casual y vibrante.",
            image: "https://mapacho.pe/wp-content/uploads/2025/05/interior4-1-768x771.jpg",
            category: "peruvian",
            rating: 4.5,
            price: "Precio medio: $25",
            details: "Este lugar combina la tradición culinaria peruana con la cultura cervecera artesanal. Elaboran sus propias cervezas con nombres inspirados en la cultura inca (como Inti IPA o Pachamama Porter) que maridan perfectamente con sus platos. El ambiente es relajado y jovial, con música en vivo algunos días. No te pierdas sus hamburguesas de alpaca o las papas nativas con quesos locales."
        },
        {
            id: 4,
            name: "The Tree House",
            description: "Acogedor café con postres caseros y café de especialidad. Ideal para desayunos y meriendas.",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c2/9d/ed/beautiful-and-cosy.jpg?w=900&h=500&s=1",
            category: "cafe",
            rating: 4.4,
            price: "Precio medio: $15",
            details: "Como su nombre indica, este acogedor café tiene una decoración rústica que evoca una casa en los árboles, con madera, plantas y luz natural. Especializado en café de especialidad de regiones peruanas (Chanchamayo, Cusco, Jaén), ofrece métodos de preparación como chemex, aeropress y prensa francesa. Sus postres caseros, especialmente el pie de limón y la cheesecake de maracuyá, son famosos en el pueblo."
        },
        {
            id: 5,
            name: "Indio Feliz",
            description: "Fusión de comida peruana y francesa en un ambiente colorido y acogedor. Menú fijo excelente.",
            image: "https://indiofeliz.com/wp-content/uploads/2021/12/terraza-03.jpg",
            category: "international",
            rating: 4.8,
            price: "Precio medio: $35",
            details: "Este restaurante es una institución en Aguas Calientes, dirigido por un chef francés que llegó al pueblo hace décadas. Combina técnicas francesas con ingredientes peruanos en un menú de tres tiempos que cambia regularmente. La decoración es ecléctica y colorida, con arte popular y antigüedades. El menú incluye sopa, plato principal y postre, con opciones vegetarianas disponibles. Reserva recomendada."
        },
        {
            id: 6,
            name: "Full House",
            description: "Pizzas y pastas en un ambiente familiar. Opciones vegetarianas disponibles.",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/e0/4e/68/nuestro-local-consta.jpg?w=900&h=-1&s=1",
            category: "international",
            rating: 4.3,
            price: "Precio medio: $20",
            details: "Si buscas un cambio de la comida peruana, este restaurante italiano ofrece pizzas al horno de leña, pastas frescas y ensaladas. El ambiente es familiar y relajado, con porciones generosas y precios razonables. Tienen opciones vegetarianas y veganas, y una selección de vinos italianos y peruanos. Ideal para familias con niños o para quienes buscan comida reconfortante después de días de caminata."
        },
        {
            id: 7,
            name: "Quinta Wahaca",
            description: "Cocina tradicional peruana en un ambiente familiar con recetas ancestrales.",
            image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
            category: "peruvian",
            rating: 4.5,
            price: "Precio medio: $22",
            details: "Este restaurante familiar se especializa en cocina tradicional peruana, con recetas transmitidas por generaciones. Destacan sus platos a base de quinoa, maíz morado y papas nativas. El ambiente es cálido y acogedor, con decoración que rinde homenaje a la cultura andina. No dejes de probar su sopa de quinoa o el lomo de alpaca a la plancha."
        },
        {
            id: 8,
            name: "Chullpi Machu Picchu",
            description: "Cocina de autor con ingredientes locales en presentaciones modernas.",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
            category: "peruvian",
            rating: 4.7,
            price: "Precio medio: $45",
            details: "Restaurante de alta cocina que reinterpreta platos tradicionales peruanos con técnicas modernas y presentaciones vanguardistas. El chef utiliza ingredientes locales de pequeños productores y comunidades andinas. El menú degustación es una experiencia culinaria que cuenta la historia de los sabores peruanos. Ideal para una ocasión especial."
        },
        {
            id: 9,
            name: "Cafe Mayu",
            description: "Cafetería junto al río con sandwiches, ensaladas y excelente café.",
            image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
            category: "cafe",
            rating: 4.2,
            price: "Precio medio: $12",
            details: "Ubicado junto al río Vilcanota, este café ofrece un ambiente relajado con el sonido del agua de fondo. Especializado en sandwiches gourmet, ensaladas frescas y café de calidad. Ideal para un desayuno rápido antes de subir a Machu Picchu o para una merienda ligera. Tienen opciones vegetarianas y veganas, y postres caseros deliciosos."
        },
        {
            id: 10,
            name: "Kintaro Japanese Restaurant",
            description: "Auténtica comida japonesa en el corazón de los Andes. Fusión nikkei única.",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
            category: "international",
            rating: 4.4,
            price: "Precio medio: $28",
            details: "Sorprendente restaurante que ofrece auténtica comida japonesa y fusión nikkei (japonés-peruana) en medio de los Andes. El sushi es excelente, con pescado fresco traído diariamente de la costa. También ofrecen tempura, ramen y platos teppanyaki. La combinación de sabores japoneses con ingredientes peruanos crea una experiencia gastronómica única."
        }
        
        
    ]   
};