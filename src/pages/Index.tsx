import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const privileges = [
    {
      id: 1,
      name: 'VIP',
      price: '199₽',
      duration: '30 дней',
      features: [
        'Уникальный префикс',
        'Приватные команды',
        'Больше слотов в инвентаре',
        'Специальные эффекты'
      ],
      popular: false
    },
    {
      id: 2, 
      name: 'PREMIUM',
      price: '399₽',
      duration: '30 дней',
      features: [
        'Все возможности VIP',
        'Летание на выживании',
        'Дополнительные команды',
        'Увеличенный лимит регионов',
        'Быстрое восстановление здоровья'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'ELITE', 
      price: '699₽',
      duration: '30 дней',
      features: [
        'Все возможности PREMIUM',
        'Креативный режим',
        'Неограниченные регионы',
        'Доступ к админским командам',
        'Персональный помощник'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-minecraft-brown/20 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 text-foreground tracking-wider" 
              style={{
                textShadow: '4px 4px 0px rgba(0,0,0,0.5)',
                fontFamily: 'monospace'
              }}>
            SERKAN
          </h1>
          <p className="text-2xl font-semibold mb-4 text-accent">
            Один из лучших серверов в майнкрафт!
          </p>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Получи уникальные возможности на нашем сервере! 
            Выбери подходящую привилегию и стань частью элитного сообщества игроков.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg">
              <Icon name="Crown" className="mr-2" size={20} />
              Выбрать привилегию
            </Button>
            <Button variant="outline" size="lg" className="font-semibold px-8 py-3 text-lg">
              <Icon name="Users" className="mr-2" size={20} />
              Наше сообщество
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1,547</div>
              <div className="text-sm text-muted-foreground">Активных игроков</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Сервер онлайн</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Время работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Privileges Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground"
                style={{
                  textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
                  fontFamily: 'monospace'
                }}>
              ПРИВИЛЕГИИ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выбери подходящий пакет привилегий и получи уникальные возможности в игре
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {privileges.map((privilege) => (
              <Card key={privilege.id} 
                    className={`relative transition-all duration-300 hover:scale-105 ${
                      privilege.popular ? 'ring-2 ring-accent shadow-lg shadow-accent/20' : ''
                    }`}>
                {privilege.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Популярный выбор
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
                      <Icon name="Crown" size={32} className="text-accent-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">{privilege.name}</CardTitle>
                  <div className="text-3xl font-bold text-accent">{privilege.price}</div>
                  <div className="text-sm text-muted-foreground">{privilege.duration}</div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {privilege.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full font-semibold ${
                      privilege.popular 
                        ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    Купить {privilege.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground"
              style={{
                textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
                fontFamily: 'monospace'
              }}>
            ПОДДЕРЖИ СЕРВЕР
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Твои пожертвования помогают нам развивать сервер, добавлять новые функции 
            и поддерживать стабильную работу 24/7
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая поддержка</h3>
              <p className="text-muted-foreground">
                Все донатеры получают приоритетную техническую поддержку и быстрое решение проблем
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Gift" size={24} className="text-accent-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Эксклюзивные бонусы</h3>
              <p className="text-muted-foreground">
                Получай специальные подарки, уникальные предметы и доступ к закрытым ивентам
              </p>
            </Card>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold px-8">
              <Icon name="Heart" className="mr-2" size={20} />
              Поддержать сервер
            </Button>
            <Button variant="outline" size="lg" className="font-semibold px-8">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            © 2024 Minecraft Privileges Server. Все права защищены.
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm">
              <Icon name="Mail" className="mr-2" size={16} />
              Поддержка
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="FileText" className="mr-2" size={16} />
              Правила
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Shield" className="mr-2" size={16} />
              Политика
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;