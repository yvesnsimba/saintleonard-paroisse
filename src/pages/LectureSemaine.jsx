import { 
  FaBook, 
  FaCalendarAlt, 
  FaPrayingHands, 
  FaHeart, 
  FaLightbulb, 
  FaShare, 
  FaPrint, 
  FaDownload,
  FaPlay,
  FaChevronDown,
  FaChevronUp,
  FaRedo
} from 'react-icons/fa';
import React, { useState } from 'react';

function LectureSemaine() {
  const [expandedDay, setExpandedDay] = useState(null);
  const [lecturesSemaine] = useState([
    {
      jour: "Lundi",
      date: "7 juillet 2025",
      theme: "14ème Semaine du Temps Ordinaire",
      couleur: "Vert",
      premiereLecture: {
        reference: "Genèse 28, 10-22",
        texte: "Jacob partit de Bershéba et se dirigea vers Harane. Il arriva en un lieu où il passa la nuit. Le soleil se couchait. Il prit une des pierres de ce lieu, la mit sous sa tête et dormit en ce lieu. Il eut un songe : voici qu'une échelle était dressée sur la terre, son sommet touchait le ciel, et des anges de Dieu montaient et descendaient. Le Seigneur se tenait près de lui et dit : « Je suis le Seigneur, le Dieu d'Abraham ton père et le Dieu d'Isaac. La terre sur laquelle tu reposes, je la donne à toi et à ta descendance. Ta descendance sera nombreuse comme la poussière du sol, tu te répandras au couchant et au levant, au nord et au midi. En toi et en ta descendance seront bénies toutes les familles de la terre. Je suis avec toi, je te garderai partout où tu iras, et je te ramènerai sur cette terre. Car je ne t'abandonnerai pas jusqu'à ce que j'aie accompli ce que je t'ai promis. » Jacob s'éveilla de son sommeil et dit : « Vraiment, le Seigneur est en ce lieu et moi, je ne le savais pas ! » Il eut peur et dit : « Que ce lieu est redoutable ! C'est ici la maison de Dieu, c'est la porte du ciel. »",
        message: "Jacob fait l'expérience de la présence de Dieu à Béthel."
      },
      psaume: {
        reference: "Psaume 91 (90)",
        refrain: "En toi, Seigneur, j'ai mon refuge."
      },
      evangile: {
        reference: "Matthieu 9, 18-26",
        texte: "En ce temps-là, tandis que Jésus parlait aux disciples de Jean, voici qu'un chef de synagogue s'approcha ; il se prosternait devant lui en disant : « Ma fille est morte à l'instant ; mais viens lui imposer la main, et elle vivra. » Jésus se leva et le suivit, ainsi que ses disciples. Et voici qu'une femme souffrant d'hémorragies depuis douze ans s'approcha par-derrière et toucha la frange de son vêtement. Elle se disait en elle-même : « Si je parviens seulement à toucher son vêtement, je serai sauvée. » Jésus se retourna et, la voyant, lui dit : « Confiance, ma fille ! Ta foi t'a sauvée. » Et, à l'heure même, la femme fut sauvée. Jésus, arrivé à la maison du chef, vit les joueurs de flûte et la foule qui s'agite bruyamment. Il dit : « Retirez-vous. La jeune fille n'est pas morte : elle dort. » Mais on se moquait de lui. Quand la foule eut été renvoyée, il entra, saisit la jeune fille par la main, et elle se leva. Et cette nouvelle se répandit dans toute cette région.",
        message: "Jésus guérit une femme hémorroïsse et ressuscite la fille d'un chef de synagogue."
      }
    },
    {
      jour: "Mardi",
      date: "8 juillet 2025",
      theme: "14ème Semaine du Temps Ordinaire",
      couleur: "Vert",
      premiereLecture: {
        reference: "Genèse 32, 23-33",
        texte: "Cette nuit-là, Jacob se leva, prit ses deux femmes, ses deux servantes, ses onze enfants, et passa le gué du Yabboq. Il les prit et leur fit passer le torrent, ainsi que tout ce qui lui appartenait. Jacob resta seul. Et quelqu'un lutta avec lui jusqu'au lever de l'aurore. Voyant qu'il ne pouvait pas le vaincre, il le frappa à l'emboîture de la hanche. La hanche de Jacob se démit pendant qu'il luttait avec lui. Il dit : « Laisse-moi partir, car l'aurore se lève. » Jacob répondit : « Je ne te laisserai pas partir, sauf si tu me bénis. » Il lui demanda : « Quel est ton nom ? » Il répondit : « Jacob. » Il reprit : « Ton nom ne sera plus Jacob, mais Israël, parce que tu as été fort contre Dieu et contre tous les hommes, et tu l'as emporté. » Jacob demanda : « Révèle-moi ton nom, je t'en prie. » Mais il répondit : « Pourquoi me demandes-tu mon nom ? » Et là il le bénit. Jacob appela ce lieu Penouël, « Face de Dieu », car, disait-il, « j'ai vu Dieu face à face, et j'ai eu la vie sauve. » Le soleil se levait quand Jacob passa Penouël. Il boitait de la hanche. C'est pourquoi, encore aujourd'hui, les fils d'Israël ne mangent pas le muscle de la hanche qui est à l'emboîture de la hanche, parce que Jacob avait été frappé à l'emboîture de la hanche.",
        message: "Jacob lutte avec Dieu et reçoit le nom d'Israël."
      },
      psaume: {
        reference: "Psaume 17 (16)",
        refrain: "Je me réveille et je vois ta face, Seigneur."
      },
      evangile: {
        reference: "Matthieu 9, 32-38",
        texte: "Comme ils s'en allaient, voici qu'on amena à Jésus un possédé muet. Le démon fut expulsé, le muet se mit à parler, et les foules furent dans l'admiration, et elles disaient : « Jamais rien de pareil ne s'est vu en Israël ! » Mais les pharisiens disaient : « C'est par le chef des démons qu'il expulse les démons. » Jésus parcourait toutes les villes et tous les villages, enseignant dans leurs synagogues, proclamant l'Évangile du Royaume et guérissant toute maladie et toute infirmité. Voyant les foules, il eut pitié d'elles parce qu'elles étaient fatiguées et abattues comme des brebis sans berger. Il dit alors à ses disciples : « La moisson est abondante, mais les ouvriers sont peu nombreux. Priez donc le maître de la moisson d'envoyer des ouvriers pour sa moisson. »",
        message: "Jésus guérit un possédé muet et invite à prier pour les ouvriers de la moisson."
      }
    },
    {
      jour: "Mercredi",
      date: "9 juillet 2025",
      theme: "14ème Semaine du Temps Ordinaire",
      couleur: "Vert",
      premiereLecture: {
        reference: "Genèse 41, 55-57 ; 42, 5-7.17-24",
        texte: "Quand toute l'Égypte commença à avoir faim, le peuple cria vers Pharaon pour avoir du pain. Pharaon dit à tous les Égyptiens : « Allez vers Joseph, faites ce qu'il vous dira. » La famine sévissait sur toute la terre. Joseph ouvrit tous les entrepôts et vendit du grain aux Égyptiens. La famine s'aggrava en Égypte. Tous les pays vinrent en Égypte pour acheter du grain auprès de Joseph, car la famine sévissait sur toute la terre. Les fils d'Israël vinrent avec d'autres gens pour acheter du grain, car la famine sévissait au pays de Canaan. Joseph était le gouverneur du pays. C'est lui qui vendait le grain à tout le peuple du pays. Les frères de Joseph arrivèrent et se prosternèrent devant lui, la face contre terre. Joseph reconnut ses frères, mais eux ne le reconnurent pas. Joseph se souvint des songes qu'il avait eus à leur sujet. Il leur dit : « Vous êtes des espions ! C'est pour observer les points faibles du pays que vous êtes venus. » Ils lui répondirent : « Non, mon seigneur ! Tes serviteurs sont venus pour acheter des vivres. Nous sommes tous fils d'un même homme. Nous sommes d'honnêtes gens. Tes serviteurs ne sont pas des espions. » Mais il leur dit : « Non ! Vous êtes venus pour observer les points faibles du pays. » Ils dirent : « Tes serviteurs sont douze frères, fils d'un même homme au pays de Canaan. Le plus jeune est maintenant avec notre père, et il y en a un qui n'est plus. » Joseph leur dit : « C'est bien ce que je vous disais : vous êtes des espions ! Voici comment vous serez mis à l'épreuve : par la vie de Pharaon, vous ne sortirez pas d'ici tant que votre plus jeune frère ne sera pas venu. Envoyez l'un de vous chercher votre frère, les autres resteront prisonniers. Ainsi vos paroles seront mises à l'épreuve pour voir si vous dites la vérité. Sinon, par la vie de Pharaon, vous êtes des espions ! » Il les mit ensemble en prison pour trois jours. Le troisième jour, Joseph leur dit : « Faites ceci et vous vivrez, car je crains Dieu : si vous êtes d'honnêtes gens, que l'un de vos frères reste prisonnier dans cette maison, et vous autres, partez, emportez du grain pour vos familles qui ont faim. Puis amenez-moi votre plus jeune frère. Ainsi vos paroles seront vérifiées et vous ne mourrez pas. » Ils firent ainsi. Ils se dirent l'un à l'autre : « Hélas ! nous sommes coupables envers notre frère : nous avons vu sa détresse quand il nous suppliait, et nous ne l'avons pas écouté. C'est pourquoi cette détresse nous arrive. » Ruben leur répondit : « Ne vous avais-je pas dit : 'Ne commettez pas ce crime contre l'enfant' ? Mais vous ne m'avez pas écouté. Voici maintenant que son sang nous est redemandé. » Ils ne savaient pas que Joseph les comprenait, car il y avait un interprète entre eux. Joseph se détourna d'eux et pleura. Puis il revint vers eux et leur parla. Il prit parmi eux Siméon et le fit enchaîner sous leurs yeux.",
        message: "Joseph reconnaît ses frères mais ne se fait pas reconnaître d'eux."
      },
      psaume: {
        reference: "Psaume 33 (32)",
        refrain: "Que ton amour, Seigneur, soit sur nous."
      },
      evangile: {
        reference: "Matthieu 10, 1-7",
        texte: "Jésus appela ses douze disciples et leur donna le pouvoir d'expulser les esprits impurs et de guérir toute maladie et toute infirmité. Voici les noms des douze Apôtres : le premier, Simon, appelé Pierre, et André son frère ; Jacques, fils de Zébédée, et Jean son frère ; Philippe et Barthélemy ; Thomas et Matthieu le publicain ; Jacques, fils d'Alphée, et Thaddée ; Simon le Zélote et Judas l'Iscariote, celui-là même qui le livra. Ces douze, Jésus les envoya en mission avec les instructions suivantes : « Ne prenez pas le chemin qui mène vers les nations païennes et n'entrez dans aucune ville des Samaritains. Allez plutôt vers les brebis perdues de la maison d'Israël. Sur votre route, proclamez que le royaume des Cieux est tout proche. »",
        message: "Jésus envoie les douze Apôtres en mission."
      }
    },
    {
      jour: "Jeudi",
      date: "10 juillet 2025",
      theme: "14ème Semaine du Temps Ordinaire",
      couleur: "Vert",
      premiereLecture: {
        reference: "Genèse 44, 18-21.23b-29 ; 45, 1-5",
        texte: "En ces jours-là, Juda et ses frères, les fils de Jacob, avaient été ramenés devant Joseph. Juda s'approcha de lui et dit : « De grâce, mon seigneur, permets que ton serviteur t'adresse une parole sans que la colère de mon seigneur s'enflamme contre ton serviteur, car tu es aussi grand que Pharaon ! Mon seigneur avait demandé à ses serviteurs : 'Avez-vous encore votre père ou un autre frère ?' Et nous avons répondu à mon seigneur : 'Nous avons encore notre vieux père et un petit frère, l'enfant qu'il a eu dans sa vieillesse ; celui-ci avait un frère qui est mort, il reste donc le seul enfant de sa mère, et notre père l'aime !' Alors tu as dit à tes serviteurs : 'Amenez-le-moi : je veux m'occuper de lui. Si votre plus jeune frère ne revient pas avec vous, vous ne serez plus admis en ma présence.' Donc, lorsque nous sommes retournés auprès de notre père, ton serviteur, nous lui avons rapporté les paroles de mon seigneur. Et, lorsque notre père a dit : 'Repartez pour nous acheter un peu de nourriture', nous lui avons répondu : 'Nous ne pourrons pas repartir si notre plus jeune frère n'est pas avec nous, car nous ne pourrons pas être admis en présence de cet homme si notre plus jeune frère n'est pas avec nous.' Alors notre père, ton serviteur, nous a dit : 'Vous savez bien que ma femme Rachel ne m'a donné que deux fils. Le premier a disparu. Sûrement, une bête féroce l'aura mis en pièces, et je ne l'ai jamais revu. Si vous emmenez encore celui-ci loin de moi et qu'il lui arrive malheur, vous ferez descendre misérablement mes cheveux blancs au séjour des morts.' Joseph ne put se contenir devant tous les gens de sa suite, et il s'écria : « Faites sortir tout le monde. » Quand il n'y eut plus personne auprès de lui, il se fit reconnaître de ses frères. Il pleura si fort que les Égyptiens l'entendirent, et même la maison de Pharaon. Il dit à ses frères : « Je suis Joseph ! Est-ce que mon père vit encore ? » Mais ses frères étaient incapables de lui répondre, tant ils étaient bouleversés de se trouver en face de lui. Alors Joseph dit à ses frères : « Approchez-vous de moi ». Ils s'approchèrent, et il leur dit : « Je suis Joseph, votre frère, que vous avez vendu pour qu'il soit emmené en Égypte. Mais maintenant ne vous affligez pas, et ne soyez pas tourmentés de m'avoir vendu, car c'est pour vous conserver la vie que Dieu m'a envoyé ici avant vous. »",
        message: "Joseph se fait reconnaître de ses frères et leur révèle que Dieu l'a envoyé pour les sauver."
      },
      psaume: {
        reference: "Psaume 104 (105), 16-17, 18-19, 20-21",
        refrain: "Souvenez-vous des merveilles que le Seigneur a faites."
      },
      evangile: {
        reference: "Matthieu 10, 7-15",
        texte: "En ce temps-là, Jésus disait à ses Apôtres : « Sur votre route, proclamez que le royaume des Cieux est tout proche. Guérissez les malades, ressuscitez les morts, purifiez les lépreux, expulsez les démons. Vous avez reçu gratuitement : donnez gratuitement. Ne vous procurez ni or ni argent, ni monnaie de cuivre à mettre dans vos ceintures, ni sac pour la route, ni tunique de rechange, ni sandales, ni bâton. L'ouvrier, en effet, mérite sa nourriture. Dans chaque ville ou village où vous entrerez, informez-vous pour savoir qui est digne de vous accueillir, et restez là jusqu'à votre départ. En entrant dans la maison, saluez ceux qui l'habitent. Si cette maison en est digne, que votre paix vienne sur elle. Si elle n'en est pas digne, que votre paix retourne vers vous. Si l'on ne vous accueille pas et si l'on n'écoute pas vos paroles, sortez de cette maison ou de cette ville, et secouez la poussière de vos pieds. Amen, je vous le dis : au jour du Jugement, le pays de Sodome et de Gomorrhe sera traité moins sévèrement que cette ville. »",
        message: "Jésus envoie ses disciples en mission avec des instructions précises."
      }
    },
    {
      jour: "Vendredi",
      date: "11 juillet 2025",
      theme: "14ème Semaine du Temps Ordinaire",
      couleur: "Vert",
      premiereLecture: {
        reference: "Genèse 46, 1-7.28-30",
        texte: "Israël partit avec tout ce qui lui appartenait. Arrivé à Bershéba, il offrit des sacrifices au Dieu de son père Isaac. Dieu parla à Israël dans une vision nocturne. Il dit : « Jacob ! Jacob ! » Il répondit : « Me voici ! » Dieu reprit : « Je suis Dieu, le Dieu de ton père. N'aie pas peur de descendre en Égypte, car là-bas je ferai de toi une grande nation. Moi-même je descendrai avec toi en Égypte, et moi-même je t'en ferai remonter. Joseph te fermera les yeux de ses mains. » Jacob partit de Bershéba. Les fils d'Israël firent monter leur père Jacob, leurs enfants et leurs femmes sur les chariots que Pharaon avait envoyés pour le transporter. Ils prirent aussi leur bétail et les biens qu'ils avaient acquis au pays de Canaan. Jacob arriva en Égypte avec toute sa descendance : ses fils et les fils de ses fils, ses filles et les filles de ses filles, toute sa descendance. Jacob envoya Juda en avant vers Joseph, pour qu'il prépare la rencontre en Goshèn. Quand ils arrivèrent en Goshèn, Joseph fit atteler son char et monta à la rencontre d'Israël, son père. Il se présenta à lui, se jeta à son cou et pleura longuement dans ses bras. Israël dit à Joseph : « Maintenant je peux mourir, puisque j'ai vu ton visage et que tu vis encore ! »",
        message: "Jacob descend en Égypte et retrouve son fils Joseph."
      },
      psaume: {
        reference: "Psaume 37 (36)",
        refrain: "Le salut des justes vient du Seigneur."
      },
      evangile: {
        reference: "Matthieu 10, 16-23",
        texte: "Jésus disait à ses Apôtres : « Voici que je vous envoie comme des brebis au milieu des loups. Soyez donc rusés comme les serpents, et candides comme les colombes. Méfiez-vous des hommes : ils vous livreront aux tribunaux et vous flagelleront dans leurs synagogues. Vous serez menés devant des gouverneurs et des rois à cause de moi : ce sera pour eux l'occasion de rendre témoignage. Quand on vous livrera, ne vous inquiétez pas de savoir ce que vous direz ni comment vous le direz : ce que vous aurez à dire vous sera donné à cette heure-là. Car ce n'est pas vous qui parlerez, c'est l'Esprit de votre Père qui parlera en vous. Le frère livrera son frère à la mort, et le père, son enfant ; les enfants se dresseront contre leurs parents et les feront mettre à mort. Vous serez détestés de tous à cause de mon nom ; mais celui qui aura persévéré jusqu'à la fin, celui-là sera sauvé. Quand on vous persécutera dans une ville, fuyez dans une autre. Amen, je vous le dis : vous n'aurez pas fini de passer dans toutes les villes d'Israël quand le Fils de l'homme viendra. »",
        message: "Jésus avertit ses disciples des persécutions qui les attendent."
      }
    },
    {
      jour: "Samedi",
      date: "12 juillet 2025",
      theme: "14ème Semaine du Temps Ordinaire",
      couleur: "Vert",
      premiereLecture: {
        reference: "Genèse 49, 29-32 ; 50, 15-26",
        texte: "Jacob donna cet ordre à ses fils : « Je vais rejoindre les miens. Enterrez-moi auprès de mes pères dans la caverne qui est dans le champ d'Éphrone le Hittite, dans la caverne du champ de Macpéla, en face de Mamré, au pays de Canaan, le champ qu'Abraham avait acheté à Éphrone le Hittite comme propriété funéraire. C'est là qu'on a enterré Abraham et Sara sa femme, c'est là qu'on a enterré Isaac et Rébecca sa femme, et c'est là que j'ai enterré Léa. Le champ et la caverne qui s'y trouve ont été achetés aux Hittites. » Quand Joseph eut enterré son père, il retourna en Égypte avec ses frères et tous ceux qui étaient montés avec lui pour l'enterrement. Voyant que leur père était mort, les frères de Joseph se dirent : « Si Joseph nous prenait en haine et nous rendait tout le mal que nous lui avons fait ! » Ils envoyèrent dire à Joseph : « Avant de mourir, ton père a donné cet ordre : 'Vous direz à Joseph : Pardonne donc à tes frères leur crime et leur péché, tout le mal qu'ils t'ont fait.' Maintenant, pardonne donc le crime des serviteurs du Dieu de ton père. » Joseph pleura quand on lui parla ainsi. Ses frères vinrent eux-mêmes se prosterner devant lui en disant : « Nous sommes tes serviteurs. » Joseph leur dit : « N'ayez pas peur ! Suis-je à la place de Dieu ? Vous aviez voulu me faire du mal, Dieu a voulu le changer en bien pour accomplir ce qui arrive aujourd'hui : sauver la vie d'un peuple nombreux. N'ayez donc pas peur. Je vous entretiendrai, vous et vos enfants. » Il les rassura en leur parlant avec tendresse. Joseph demeura en Égypte, lui et la maison de son père. Il vécut cent dix ans. Il vit les fils d'Éphraïm jusqu'à la troisième génération. Les fils de Makir, fils de Manassé, naquirent aussi sur les genoux de Joseph. Joseph dit à ses frères : « Je vais mourir. Dieu ne manquera pas de vous visiter et vous fera remonter de ce pays vers le pays qu'il a promis par serment à Abraham, Isaac et Jacob. » Joseph fit jurer les fils d'Israël en disant : « Quand Dieu vous visitera, vous ferez remonter mes ossements d'ici. » Joseph mourut à l'âge de cent dix ans. On l'embauma et on le mit dans un cercueil en Égypte.",
        message: "Jacob meurt et Joseph pardonne à ses frères."
      },
      psaume: {
        reference: "Psaume 105 (104)",
        refrain: "Le Seigneur s'est toujours souvenu de son alliance."
      },
      evangile: {
        reference: "Matthieu 10, 24-33",
        texte: "Jésus disait à ses Apôtres : « Le disciple n'est pas au-dessus de son maître, ni le serviteur au-dessus de son seigneur. Il suffit au disciple d'être comme son maître, et au serviteur d'être comme son seigneur. Si les gens ont traité de Béelzéboul le maître de maison, ce qu'ils diront de sa maisonnée, c'est encore pire ! Ne les craignez donc pas. Rien n'est voilé qui ne sera dévoilé, rien n'est secret qui ne sera connu. Ce que je vous dis dans l'obscurité, dites-le en pleine lumière ; ce que vous entendez dans le creux de l'oreille, proclamez-le sur les toits. Ne craignez pas ceux qui tuent le corps sans pouvoir tuer l'âme ; craignez plutôt celui qui peut faire périr dans la géhenne à la fois l'âme et le corps. Est-ce que l'on ne vend pas deux moineaux pour un sou ? Et pas un seul ne tombe à terre sans votre Père. Quant à vous, même vos cheveux sont tous comptés. Soyez donc sans crainte : vous valez plus qu'une multitude de moineaux. Quiconque se déclarera pour moi devant les hommes, moi aussi je me déclarerai pour lui devant mon Père qui est aux cieux. Mais celui qui me reniera devant les hommes, moi aussi je le renierai devant mon Père qui est aux cieux. »",
        message: "Jésus encourage ses disciples à ne pas craindre les persécutions."
      }
    },
    {
      jour: "Dimanche",
      date: "13 juillet 2025",
      theme: "15ème Dimanche du Temps Ordinaire",
      couleur: "Vert",
      premiereLecture: {
        reference: "Amos 7, 12-15",
        texte: "Amazias, prêtre de Béthel, dit à Amos : « Toi, le voyant, va-t'en d'ici, fuis au pays de Juda ; c'est là que tu pourras gagner ta vie en faisant ton métier de prophète. Mais ici, à Béthel, arrête de prophétiser ; car c'est un sanctuaire royal, un temple du royaume. » Amos répondit à Amazias : « Je n'étais pas prophète, ni fils de prophète ; j'étais bouvier, et je soignais les sycomores. Mais le Seigneur m'a saisi quand j'étais derrière le troupeau, et c'est lui qui m'a dit : 'Va, tu seras prophète pour mon peuple Israël.' »",
        message: "Amos est appelé par Dieu à être prophète malgré son humble condition."
      },
      deuxiemeLecture: {
        reference: "Éphésiens 1, 3-14",
        texte: "Béni soit Dieu, le Père de notre Seigneur Jésus Christ ! Il nous a bénis et comblés des bénédictions de l'Esprit, au ciel, dans le Christ. Il nous a élus en lui, avant la fondation du monde, pour être saints, immaculés devant lui, dans l'amour. Il nous a prédestinés à être, pour lui, des fils adoptifs par Jésus Christ. Tel fut le bon plaisir de sa volonté, à la louange de gloire de sa grâce, dont il nous a favorisés dans le Bien-aimé. En lui, par son sang, nous avons la rédemption, le pardon de nos fautes. C'est la richesse de la grâce que Dieu a répandue sur nous en toute sagesse et intelligence. Il nous a fait connaître le mystère de sa volonté, le dessein bienveillant qu'il avait formé en lui par avance, pour le réaliser quand les temps seraient accomplis : réunir l'univers entier sous un seul chef, le Christ, ce qui est dans les cieux et ce qui est sur la terre. En lui nous avons été établis comme héritiers, selon le dessein de celui qui réalise tout selon sa volonté, pour être la louange de sa gloire, nous qui avons d'avance espéré dans le Christ. En lui vous aussi, après avoir écouté la parole de vérité, l'Évangile qui vous sauve, et y avoir cru, vous avez reçu la marque de l'Esprit Saint qui était promis. L'Esprit est la garantie de notre héritage, en vue de la rédemption que nous avons acquise, pour la louange de sa gloire.",
        message: "Paul loue Dieu pour les bénédictions spirituelles reçues en Christ."
      },
      psaume: {
        reference: "Psaume 85 (84)",
        refrain: "Fais-nous voir, Seigneur, ton amour."
      },
      evangile: {
        reference: "Marc 6, 7-13",
        texte: "Jésus appela les Douze et commença à les envoyer en mission deux par deux. Il leur donnait autorité sur les esprits impurs, et il leur prescrivit de ne rien prendre pour la route, sauf un bâton : pas de pain, pas de sac, pas de pièces de monnaie dans la ceinture, mais pour chausser des sandales, et il ajouta : « Ne mettez pas de tunique de rechange. » Il leur disait encore : « Quand vous avez trouvé l'hospitalité dans une maison, restez-y jusqu'à votre départ. Si, dans une localité, on refuse de vous accueillir et de vous écouter, partez et secouez la poussière de vos pieds : ce sera pour eux un témoignage. » Ils partirent, et proclamèrent qu'il fallait se convertir. Ils expulsaient beaucoup de démons, faisaient des onctions d'huile à de nombreux malades et les guérissaient.",
        message: "Jésus envoie les Douze en mission avec des instructions précises."
      }
    }
  ]);

  const toggleDay = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="lecture-semaine">
      {/* Hero Section */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #138a99 100%)', color: 'white'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Lecture de la semaine</h1>
              <p className="lead mb-2">
                Découvrez les lectures bibliques pour toute la semaine
              </p>
              <p className="mb-0 opacity-75">
                Du lundi au dimanche, nourrissez votre foi avec la Parole de Dieu
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <FaBook size={64} className="opacity-75" />
            </div>
          </div>
        </div>
      </section>

      {/* Informations générales */}
      <section className="py-4" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <div className="d-flex align-items-center justify-content-center">
                <FaCalendarAlt className="me-2" style={{color: '#19b6c9'}} />
                <span className="fw-bold">
                  {lecturesSemaine.length > 0 ? 
                    `Semaine du ${lecturesSemaine[0].date} au ${lecturesSemaine[6].date}` : 
                    'Semaine en cours'
                  }
                </span>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="d-flex align-items-center justify-content-center">
                <FaPrayingHands className="me-2" style={{color: '#19b6c9'}} />
                <span className="fw-bold">Temps liturgique</span>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="d-flex align-items-center justify-content-center">
                <FaHeart className="me-2" style={{color: '#19b6c9'}} />
                <span className="fw-bold">
                  {lecturesSemaine.length > 0 ? 
                    `Couleur : ${lecturesSemaine[0].couleur}` : 
                    'Couleur : Vert'
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lectures par jour */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Lectures de la semaine</h2>
          <div className="row">
            {lecturesSemaine.map((lecture, index) => (
              <div key={index} className="col-12 mb-4">
                <div className="card border-0 shadow-sm">
                  <div 
                    className="card-header d-flex justify-content-between align-items-center" 
                    style={{background: '#19b6c9', color: 'white', borderRadius: '12px 12px 0 0', cursor: 'pointer'}}
                    onClick={() => toggleDay(lecture.jour)}
                  >
                    <h3 className="mb-0">
                      <FaBook className="me-2" />
                      {lecture.jour} - {lecture.date}
                    </h3>
                    <div>
                      {expandedDay === lecture.jour ? (
                        <FaChevronUp size={20} />
                      ) : (
                        <FaChevronDown size={20} />
                      )}
                    </div>
                  </div>
                  
                  {expandedDay === lecture.jour && (
                    <div className="card-body p-4">
                      <div className="row mb-4">
                        <div className="col-md-6">
                          <h5 className="fw-bold" style={{color: '#19b6c9'}}>Thème</h5>
                          <p className="mb-0">{lecture.theme}</p>
                        </div>
                        <div className="col-md-6">
                          <h5 className="fw-bold" style={{color: '#19b6c9'}}>Couleur liturgique</h5>
                          <p className="mb-0">{lecture.couleur}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className={`${lecture.jour === 'Dimanche' ? 'col-lg-3' : 'col-lg-4'} mb-4`}>
                          <div className="card h-100" style={{border: '1px solid #e9ecef'}}>
                            <div className="card-header" style={{background: '#f8f9fa', border: 'none'}}>
                              <h6 className="mb-0 fw-bold">Première Lecture</h6>
                            </div>
                            <div className="card-body">
                              <p className="text-muted small mb-2">{lecture.premiereLecture.reference}</p>
                              <p className="mb-3" style={{lineHeight: '1.6'}}>
                                {lecture.premiereLecture.texte}
                              </p>
                              <div className="alert alert-info py-2" style={{background: '#e3f2fd', border: 'none', fontSize: '0.9rem'}}>
                                <FaLightbulb className="me-1" style={{color: '#19b6c9'}} />
                                <strong>Message :</strong> {lecture.premiereLecture.message}
                              </div>
                            </div>
                          </div>
                        </div>

                        {lecture.jour === 'Dimanche' && (
                          <div className="col-lg-3 mb-4">
                            <div className="card h-100" style={{border: '1px solid #e9ecef'}}>
                              <div className="card-header" style={{background: '#f8f9fa', border: 'none'}}>
                                <h6 className="mb-0 fw-bold">Deuxième Lecture</h6>
                              </div>
                              <div className="card-body">
                                <p className="text-muted small mb-2">{lecture.deuxiemeLecture.reference}</p>
                                <p className="mb-3" style={{lineHeight: '1.6'}}>
                                  {lecture.deuxiemeLecture.texte}
                                </p>
                                <div className="alert alert-info py-2" style={{background: '#e3f2fd', border: 'none', fontSize: '0.9rem'}}>
                                  <FaLightbulb className="me-1" style={{color: '#19b6c9'}} />
                                  <strong>Message :</strong> {lecture.deuxiemeLecture.message}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className={`${lecture.jour === 'Dimanche' ? 'col-lg-3' : 'col-lg-4'} mb-4`}>
                          <div className="card h-100" style={{border: '1px solid #e9ecef'}}>
                            <div className="card-header" style={{background: '#f8f9fa', border: 'none'}}>
                              <h6 className="mb-0 fw-bold">Psaume</h6>
                            </div>
                            <div className="card-body">
                              <p className="text-muted small mb-2">{lecture.psaume.reference}</p>
                              <div className="alert alert-warning py-2 mb-3" style={{background: '#fff3cd', border: 'none', fontSize: '0.9rem'}}>
                                <strong>Refrain :</strong> {lecture.psaume.refrain}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className={`${lecture.jour === 'Dimanche' ? 'col-lg-3' : 'col-lg-4'} mb-4`}>
                          <div className="card h-100" style={{border: '1px solid #e9ecef'}}>
                            <div className="card-header" style={{background: '#f8f9fa', border: 'none'}}>
                              <h6 className="mb-0 fw-bold">Évangile</h6>
                            </div>
                            <div className="card-body">
                              <p className="text-muted small mb-2">{lecture.evangile.reference}</p>
                              <p className="mb-3" style={{lineHeight: '1.6'}}>
                                {lecture.evangile.texte}
                              </p>
                              <div className="alert alert-success py-2" style={{background: '#d4edda', border: 'none', fontSize: '0.9rem'}}>
                                <FaLightbulb className="me-1" style={{color: '#19b6c9'}} />
                                <strong>Message :</strong> {lecture.evangile.message}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="text-center mb-4">Actions</h4>
                  <div className="row text-center">
                    <div className="col-md-3 mb-3">
                      <button className="btn btn-outline-primary w-100">
                        <FaShare className="me-2" />
                        Partager
                      </button>
                    </div>
                    <div className="col-md-3 mb-3">
                      <button className="btn btn-outline-secondary w-100">
                        <FaPrint className="me-2" />
                        Imprimer
                      </button>
                    </div>
                    <div className="col-md-3 mb-3">
                      <button className="btn btn-outline-info w-100">
                        <FaDownload className="me-2" />
                        Télécharger
                      </button>
                    </div>
                    <div className="col-md-3 mb-3">
                      <button className="btn btn-outline-success w-100">
                        <FaPlay className="me-2" />
                        Écouter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LectureSemaine; 