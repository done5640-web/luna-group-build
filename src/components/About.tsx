import { Building2, Target, Users } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const About = () => {
  return (
    <section id="rreth-nesh" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-construction-gold uppercase tracking-wider">
              Rreth Nesh
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
              Luna Group Construction
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Luna Group Construction është një kompani ndërtimi e fokusuar në ndërtimin e 
              shtëpive dhe vilave. Ne ofrojmë punë cilësore, korrektësi dhe besim, duke 
              ndjekur çdo projekt nga themeli deri në dorëzim.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 gold-gradient rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Misioni Ynë</h3>
                  <p className="text-muted-foreground text-sm">
                    Të ndërtojmë shtëpi dhe vila cilësore që plotësojnë ëndrrat e klientëve tanë.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 gold-gradient rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Ekipi Ynë</h3>
                  <p className="text-muted-foreground text-sm">
                    Punëtorë profesionistë me vite eksperiencë në ndërtim.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 gold-gradient rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Projektet Tona</h3>
                  <p className="text-muted-foreground text-sm">
                    Mbi 50 projekte të përfunduara me sukses në gjithë Shqipërinë.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={gallery1}
                  alt="Luna Group Construction Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={gallery2}
                  alt="Luna Group Construction Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={gallery3}
                  alt="Luna Group Construction Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl gold-gradient flex items-center justify-center">
                <div className="text-center text-foreground">
                  <div className="text-4xl font-heading font-bold">10+</div>
                  <div className="text-sm">Vite Eksperiencë</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
