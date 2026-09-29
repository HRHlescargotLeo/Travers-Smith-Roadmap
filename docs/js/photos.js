/* photos.js — Travers Smith's own imagery, hotlinked from traverssmith.com.
   Portraits and illustrations are applied only once they have loaded; if an image
   can't load, the brand-colour placeholder from theme.css stays in place.
   Photography and illustrations © Travers Smith LLP. */
(function () {
  'use strict';
  var BASE = 'https://www.traverssmith.com';

  /* Square portrait crops used on the live site's people cards */
  var PORTRAITS = {
    'andrew-gillen': '/media/c0qpvf4s/andrew_gillen_1_dto5ze.jpg?rxy=0.5484857373617233,0.3037974683544304&width=480&height=480&v=1dc4427263dcd30',
    'aaron-stocks': '/media/2851/aaron-stocks.jpg?rxy=0.524627017559008,0.08930932803858953&width=480&height=480&v=1d9735a3651ed50',
    'adrian-west': '/media/2856/adrian-west.jpg?rxy=0.472180092081145,0.27482551387989196&width=480&height=480&v=1d9733964f2bca0',
    'will-yates': '/media/kgxllbeu/will_yates_2_aqtgud-website-card.jpg?rxy=0.4861275290972521,0.37519475758408943&width=480&height=480&v=1dcd87811c3ec00',
    'emma-havas': '/media/2259/emma-havas.jpg?width=480&height=480&v=1d5781a8dea6810',
    'william-howard': '/media/3160/william-howard.jpg?rxy=0.4969158731028527,0.1209979996876949&width=480&height=480&v=1d9736d0caaf420',
    'rob-fell': '/media/maqkch5a/_0002_rob-fell.jpg?rxy=0.4977729376845473,0.2630794891421981&width=480&height=480&v=1db448b5cdb2410',
    'danny-riding': '/media/sbkencth/_0007_danny-riding.jpg?rxy=0.5053489630995872,0.2933485813721221&width=480&height=480&v=1db448c6b209810',
    'jon-reddington': '/media/4mzdogfk/jon-reddington-website-hero.jpg?rxy=0.554,0.4136353408835221&width=480&height=480&v=1dd41cc54981610',
    'sian-keall': '/media/7685/sian-keall.jpg?rxy=0.5219862607733208,0.2826462201311272&width=480&height=480&v=1d9378680d999f0',
    'david-james': '/media/5336/david-james.jpg?width=480&height=480&v=1d5d7f4306fe810',
    'daniel-gerring': '/media/xs2hnlsn/daniel_gerring_2_n0l6hz.jpg?rxy=0.4764814229514355,0.041126532449558995&width=480&height=480&v=1dc52fa6dc06820',
    'niamh-hamlyn': '/media/3040/niamh-hamlyn.jpg?width=480&height=480&v=1d5781a8ff35770',
    'chris-widdison': '/media/4635/chris-widdison.jpg?width=480&height=480&v=1d5781a95be7ef0',
    'harriet-sayer': '/media/7849/harriet-sayer.jpg?width=480&height=480&v=1d848c0f3a99e90',
    'alexander-economides': '/media/lrxjuvkn/alex-economides.jpg?cc=0.3200629359509006,0.07039921638437314,0.23124433496543417,0.2566035847360752&width=480&height=480&v=1dd2a32cb2f0290',
    'catrin-young': '/media/dkqnc0un/catrinyoung_pdybn9-no_crop_hd.jpg?rxy=0.47031112700314487,0.4165694104985276&width=480&height=480&v=1dce2926bf4a510',
    'victoria-bramall': '/media/qvyb03t3/victoria-bramall-2022.jpg?width=480&height=480&v=1d8644907305d70',
    'tom-coulter': '/media/3118/tom-coulter.jpg?rxy=0.5030787137221796,0.1215971479754287&width=480&height=480&v=1d9733c6dada9b0',
    'jaryd-davidson': '/media/1vnfplir/jaryd-davidson-card.png?rxy=0.4952421380310587,0.30287121915761417&width=480&height=480&v=1dbfbb2c54f7170',
    'jeremy-dennison': '/media/0heinztv/jeremy-dennison.png?width=480&height=480&v=1dbe420f02e8ab0',
    'alex-dixon': '/media/of2hpxyv/alex_dixon_1_bga44f.jpg?rxy=0.37637474541751526,0.35441490986862206&width=480&height=480&v=1dc44c91086feb0',
    'tom-hartwright': '/media/pb2jjmo0/portraits.jpg?width=480&height=480&v=1da52a5bbe5c510',
    'hugh-hutchison': '/media/2952/hugh-hutchison.jpg?width=480&height=480&v=1d5781a8e690df0',
    'laura-kelly': '/media/fqcbkbos/laura-kelly.jpg?width=480&height=480&v=1da21b9d7ea3dd0',
    'ben-lowen': '/media/e5saaqjm/ben_lowen_1_dzvqsz.jpg?rxy=0.47816705308457935,0.24110910186859555&width=480&height=480&v=1dc44274026cc10',
    'adam-orr': '/media/hp1m15ot/adam-orr.jpg?width=480&height=480&v=1d988767f453220',
    'mohammed-senouci': '/media/4603/mohammed-senouci.jpg?width=480&height=480&v=1d5781a958b8810',
    'ella-sharpley': '/media/t5qkcetd/ella-sharpley-card.png?rxy=0.4851351556222616,0.28267980454710656&width=480&height=480&v=1dbfbb2f0d3e290',
    'jonathan-walters': '/media/5748/jonathan-walters.jpg?width=480&height=480&v=1d6026026fcdc70',
    'natalie-lewis': '/media/4406/natalie-lewis.jpg?width=480&height=480&v=1d5781a9435bc10',
    'phil-bartram': '/media/2bhfgpix/phil_bartram_1_srtxup.jpg?rxy=0.5263855794460495,0.3568414707655214&width=480&height=480&v=1dc328264cd84c0',
    'sophie-burns': '/media/3141/sophie-thompson.jpg?rxy=0.47844362103264343,0.0861218978749155&width=480&height=480&v=1d9733e29693e70',
    'catherine-odriscoll': '/media/2899/catherine-o_driscoll.jpg?rxy=0.5002291910150717,0.11784022044742297&width=480&height=480&v=1d9743c87b3af20',
    'james-oneill': '/media/6193/james-o_neill.jpg?width=480&height=480&v=1d68b3f19e9edd0',
    'emma-pereira': '/media/3139/emma-pereira.jpg?width=480&height=480&v=1d5781a91c8b3b0',
    'jamie-smith': '/media/rhigaol1/jamie-smith-1.jpg?width=480&height=480&v=1dacb795552ebf0',
    'chris-towland': '/media/2906/chris-towland.jpg?rxy=0.5030787137221796,0.10977206460859097&width=480&height=480&v=1d9733e0efb7f30',
    'sarah-walker': '/media/gmtm3pwe/sarah-walker-hero.jpg?width=480&height=480&v=1d92f0b514da8d0',
    'ailie-murray': '/media/4c5ktrna/ailie-murray.jpg?width=480&height=480&v=1da16c2bdff1b90',
    'james-longster': '/media/2965/james-longster.jpg?width=480&height=480&v=1d5781a8eadb810',
    'sarah-jane-denton': '/media/5298/sarah-jane-denton.jpg?rxy=0.46635593856695934,0.13754869272548587&width=480&height=480&v=1d9743f84fe72d0',
    'simon-witney': '/media/6240/simon-witney.jpg?width=480&height=480&v=1d6921db541bee0',
    'caroline-edwards': '/media/ccrfo243/carolineedwards3_qvirdz_no_crop_hd.jpg?cc=0.2359660225442834,0.12459959742351047,0.31910805152979066,0.20801151368760068&width=480&height=480&v=1dd2a3895708f60',
    'adam-wyman': '/media/2855/adam-wyman.jpg?rxy=0.5125467373598398,0.0744815814356846&width=480&height=480&v=1d978b64a32e250',
    'heather-gagen': '/media/4118/heather-gagen.jpg?rxy=0.48152300761883543,0.0861218978749155&width=480&height=480&v=1d973406a4a5da0',
    'stephanie-lee': '/media/3105/stephanie-lee.jpg?rxy=0.4661260746878753,0.11765545351981613&width=480&height=480&v=1d973408669eb90',
    'hannah-manning': '/media/2945/hannah-manning.jpg?width=480&height=480&v=1d5781a8e40ec80',
    'jonathan-gilmour': '/media/5103/jonathan-gilmour.jpg?width=480&height=480&v=1d588b53ac5d740',
    'elinor-samuel': '/media/3561/elinor-samuel.jpg?rxy=0.48141136463760453,0.07982463297366386&width=480&height=480&v=1d978e92eb50a70',
    'john-buttanshaw': '/media/4472/john-buttanshaw.jpg?rxy=0.4846023942050275,0.12948053688665387&width=480&height=480&v=1d97437ac7f0890',
    'john-lee': '/media/5145/john-lee.jpg?width=480&height=480&v=1d598610c3e8050',
    'alexandra-macbean': '/media/3335/alexandra-macbean.jpg?rxy=0.4753294565096826,0.08547163715300736&width=480&height=480&v=1d9737224a06e20'
  };

  /* The firm's flat illustrations (transparent PNGs), used on the heroes */
  var ART = {
    people: '/media/sdik5vk5/hr-peoplefor-racing-green-background.png',
    corporate: '/media/4682/strategy-corporate-m-and-a-goals-playbook-hero-inline-8.png',
    pensions: '/media/5137/pensions-law-travers-smith-lighthouse-hero-inline-lighthouse-8.png',
    knowledge: '/media/4600/knowledge-hero-inline.png',
    calendar: '/media/5457/calendar.png?width=800',
    defence: '/media/jmmdhodk/defence-radar-op3.png?width=800',
    fintech: '/media/frodfwls/fintech-vibrant.png?width=800',
    microphone: '/media/v3mls24f/microphone-variation-png.png',
    signup: '/media/6524/data-capture-extra-01.png?width=800',
    contact: '/media/4602/newsroom-2-gold-turquoise-prussian-blue-hero-inline.png',
    international: '/media/dv3bhhvi/golden_gate_teracotta_rgb.png',
    passport: '/media/4594/immigration-passport-hero-inline.png',
    ideas: '/media/6362/ideas-dark.png',
    bulb: '/media/6354/environmental-bulb-minimal.png?width=800',
    speaker: '/media/5704/speakerphone-prussian-blue-small.png',
    surprising: '/media/4433/surprising-hero-inline.png',
    sports: '/media/dvbfcgas/sports-strategy.png'
  };

  var PAGE_ART = {
    'index.html': 'people', 'service.html': 'corporate', 'briefing.html': 'pensions', 'topic-hub.html': 'knowledge',
    'events.html': 'calendar', 'stay-in-touch.html': 'signup', 'contact.html': 'contact',
    'international.html': 'international', 'region.html': 'passport'
  };
  var EVENT_ART = { 'ukraine-defence': 'defence', 'frontline': 'microphone', 'future-fintech': 'fintech', 'future-fintech-2025': 'fintech', 'small-pots': 'pensions', 'uk-srs': 'bulb', 'cs3d': 'bulb', 'csrd': 'bulb' };
  var HUB_ART = ['corporate', 'people', 'pensions', 'calendar', 'signup', 'international'];
  var CASE_ART = ['ideas', 'surprising', 'speaker'];

  function load(path, done) {
    var img = new Image();
    img.onload = function () { done(img); };
    img.src = BASE + path;
  }
  function fill(slot, path, alt) {
    if (!slot || !path) return;
    load(path, function (img) {
      img.className = 'ph-img';
      img.alt = alt || '';
      var wrap = document.createElement('span');
      wrap.className = 'ph-wrap ' + slot.className.replace('wf-placeholder', '').trim();
      wrap.appendChild(img);
      slot.parentNode.replaceChild(wrap, slot);
    });
  }
  function heroArt(key) {
    var hero = document.querySelector('.page-hero, .hub-hero');
    if (!hero || !ART[key]) return;
    load(ART[key], function (img) {
      img.className = 'hero-art';
      img.alt = '';
      img.setAttribute('aria-hidden', 'true');
      hero.insertBefore(img, hero.firstChild);
    });
  }
  function slugFrom(el) {
    var a = el && el.querySelector('a[href*="person="]');
    return a ? a.getAttribute('href').split('person=')[1].split('&')[0] : null;
  }
  function param(name) {
    try { return new URLSearchParams(window.location.search).get(name); } catch (e) { return null; }
  }

  function portraits() {
    document.querySelectorAll('.person-card, .person-mini').forEach(function (card) {
      var ph = card.querySelector('.wf-placeholder');
      var slug = slugFrom(card);
      if (ph && slug && PORTRAITS[slug]) fill(ph, PORTRAITS[slug], '');
    });
    var head = document.querySelector('#profile .profile-head .wf-placeholder');
    if (head) {
      var name = document.querySelector('#profile h1');
      var slug = null;
      var p = window.TS_PROFILES || {};
      Object.keys(p).forEach(function (k) { if (name && p[k].n === name.textContent) slug = k; });
      if (slug && PORTRAITS[slug]) fill(head, PORTRAITS[slug].replace('width=480&height=480', 'width=720&height=860'), name.textContent);
    }
  }

  function run() {
    var file = window.location.pathname.split('/').pop() || 'index.html';
    if (file === 'event.html') {
      var id = param('event');
      if (!id) { try { var q = JSON.parse(sessionStorage.getItem('ts-q') || 'null'); if (q && q.file === 'event.html') id = new URLSearchParams(q.q).get('event'); } catch (e) { /* ignore */ } }
      heroArt(EVENT_ART[id || 'ukraine-defence'] || 'calendar');
    } else if (PAGE_ART[file]) heroArt(PAGE_ART[file]);

    document.querySelectorAll('.proto-thumb .wf-placeholder').forEach(function (ph, i) { fill(ph, ART[HUB_ART[i]], ''); });
    document.querySelectorAll('.case-grid > .wf-placeholder').forEach(function (ph, i) { fill(ph, ART[CASE_ART[i % CASE_ART.length]], ''); });
    portraits();
    // Speakers and colleagues are rendered after load; catch them too.
    window.setTimeout(portraits, 50);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
