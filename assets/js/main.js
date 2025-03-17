/**
* Template Name: Dewi
* Template URL: https://bootstrapmade.com/dewi-free-multi-purpose-html-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }
  

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  // Object storing service details
  const serviceDetails = {
    "network-optimization": {
      title: "Network Optimization",
      content: " We do this to help our customers make most of their resources hence obtaining most of their opportunities and improve their network quality by increasing network availability thereby reducing costs that the companies may incur due to unavailability of network resources"
    },
    "network-security": {
      title: "Network Security",
      content: "GetuIctSolutions information security solutions utilize internal methodology which includes assessment, design, validation, planning, implementation, and management. GetuIctSolutions understands the top business concerns around solutions like identity management, policy development, and incident response plans, as well as technology solutions like firewalls, intrusion detection, and strong authentication. From business and compliance drivers to technology solutions, GetuIctSolutions can help bridge the gap between the expectations of the business and the realities of IT throughout the complete process of information security. We provide Network performance monitoring tools to assist Network administrators in managing complex networks. GetuIctSolutions uses industrial security vendors like Symantec, McAfee, Kaspersky, Cisco, SonicWALL etc."
    },
    "enterprise-voip": {
      title: "Enterprise VoIP",
      content: "Voice over Internet Protocol is a transmission technology for delivery of voicecommunications over IP networks such as Internet or other packet switchednetworks. VoIP systems employ session control protocols to control the set-up andtear-down of calls as well as audio codecs which encode speech allowingtransmission over an IP network as digital audio via an audio stream. There arethree common methods we use for connecting to VoIP service providers asoutlined below.● An Analog Telephone Adapter (ATA) connected between an IP network(such as a broadband connection) and an existing telephone jack.● Dedicated VoIP phones which allow VoIP calls without the use of acomputer.● A softphone (also known as an Internet phone or digital phone) which is apiece of software that can be installed on a computer and allows VoIP callingwithout dedicated hardware."
    },
    "lan-wan-design": {
      title: "LAN/WAN Design",
      content: "GetuIctandSecuritySolutions designs, implements and manages WAN/VPN and LAN. We do structured cabling design and implementation for LAN, create VLANS to separate traffic between users hence limiting broadcasts over a network, designing and building state of the art Wireless networks using strong encryption algorithms and range boosted access points. We start from selecting appropriate equipment’s needed such as routers, switches, and infrastructure planning."
    },
    "network-management": {
      title: "Network Management",
      content: "GetuIctandSecuritySolutions provides network monitoring and support to assistcustomers to properly manage their networks. We use different Engineers toolsetfor network monitoring which has different tools used to gather information aboutthe current status of the network by constantly monitoring the network and givesa notification in case of outages for failing or slow components. We providenetwork support to our customers after signing a contract with them and we offer24/7 support services."
    },
    "domain-registration": {
      title: "Domain Name Registration",
      content: "A domain name gives you a unique identity of your own on the net, it addscredibility to your business or project and gives it a professional image. Once youown a domain you can then accommodate as many emails as you wish for variousdepartments of your business or Enterprise. GetuIctandSecuritySolutions does thefollowing:● Private domain registration such as .com, .co.tz, .org, .or.tz, .go.tz, .net, .biz,.info etc.● Domain locking to prevent unauthorized transfer of a domain.● Domain transfer to direct a domain to an existing website.● DNS management."
    }
  };

  // Event listener for service links
  document.querySelectorAll(".service-link").forEach(link => {
    link.addEventListener("click", function () {
      const serviceKey = this.getAttribute("data-service");
      if (serviceDetails[serviceKey]) {
        document.getElementById("modalTitle").innerText = serviceDetails[serviceKey].title;
        document.getElementById("modalContent").innerText = serviceDetails[serviceKey].content;
      }
    });
  });
