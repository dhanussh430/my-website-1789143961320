

document.addEventListener(
  'DOMContentLoaded',
  () => {

    // -------------------------------
    // MOBILE MENU
    // -------------------------------

    const menuToggle =
      document.getElementById(
        'menuToggle'
      );

    const mobileNav =
      document.getElementById(
        'mobileNav'
      );


    if (menuToggle && mobileNav) {

      menuToggle.addEventListener(
        'click',
        () => {

          const active =
            mobileNav.classList.toggle(
              'active'
            );

          menuToggle.setAttribute(
            'aria-expanded',
            active
          );

        }
      );


      mobileNav
        .querySelectorAll('a')
        .forEach(link => {

          link.addEventListener(
            'click',
            () => {

              mobileNav.classList.remove(
                'active'
              );

              menuToggle.setAttribute(
                'aria-expanded',
                'false'
              );

            }
          );

        });

    }


    // -------------------------------
    // SCROLL REVEAL
    // -------------------------------

    const sections =
      document.querySelectorAll(
        '.section'
      );


    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.style.opacity =
                '1';

              entry.target.style.transform =
                'translateY(0)';

            }

          });

        },
        {
          threshold: .12
        }
      );


    sections.forEach(section => {

      section.style.opacity = '0';

      section.style.transform =
        'translateY(25px)';

      section.style.transition =
        'opacity .7s ease, transform .7s ease';

      observer.observe(section);

    });


    // -------------------------------
    // CONTACT FORM
    // -------------------------------

    const contactForm =
      document.getElementById(
        'contactForm'
      );


    if (contactForm) {

      contactForm.addEventListener(
        'submit',
        event => {

          event.preventDefault();

          alert(
            'Thank you! Your message has been received.'
          );

          contactForm.reset();

        }
      );

    }


    // -------------------------------
    // ACTIVE NAVIGATION
    // -------------------------------

    const navLinks =
      document.querySelectorAll(
        '.desktop-nav a'
      );


    const sectionObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              navLinks.forEach(link => {

                link.style.color =
                  '';

              });


              const activeLink =
                document.querySelector(
                  '.desktop-nav a[href="#' +
                  entry.target.id +
                  '"]'
                );


              if (activeLink) {

                activeLink.style.color =
                  'var(--accent)';

              }

            }

          });

        },
        {
          threshold: .45
        }
      );


    document
      .querySelectorAll(
        'main .section'
      )
      .forEach(section => {

        sectionObserver.observe(
          section
        );

      });

  }

);

