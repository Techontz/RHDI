import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, X, MapPin, Mail, Phone, Calendar, Globe, Award, BookOpen, Users, Heart } from 'lucide-react';

// Staff Images (tumia placeholder au picha halisi)
import GeraldImage from "../../assets/staff/Ronel Laubscher.jpeg";
import MwaqasImage from "../../assets/staff/mwaqas.webp";
import IbrahimImage from "../../assets/staff/ibrah.jpeg";
import DavidImage from "../../assets/staff/david.webp";
import MaryImage from "../../assets/staff/franklin.jpeg";
import JenniferImage from "../../assets/staff/jennifer.jpeg";
import KabambiImage from "../../assets/staff/sudan.jpeg";
import VivekImage from "../../assets/staff/vive.jpeg";
import AnthonyImage from "../../assets/staff/YOO.jpeg";
import DuncanImage from "../../assets/staff/dunc.jpeg";
import EmmanuelImage from "../../assets/staff/emma.jpeg";

// Staff Data JSON with full details
const staffData = [
  {
    id: 1,
    name: "Ronel Laubscher",
    position: "Director in South Africa",
    title: "Director",
    country: "South Africa",
    image: GeraldImage,
    bio: "My name is Ronel Laubscher",
    email: "",
    phone: "",
    since: "",
    fullBio: `My name is Ronel Laubscher, and I live in Stilfontein, South Africa, with my husband and our two beautiful daughters. I gave my life to Christ and was baptized in my early twenties, and since then, my walk with the Lord has been marked by continual growth, surrender, and dependence on Him.

One of the greatest lessons I have learned in my relationship with God is that the closer I draw to Him, the more aware I become of my need for His grace. The more I see His holiness and perfection, the more I recognize my own brokenness — and in that place, I have experienced His love, mercy, and transforming power in profound ways.

Throughout my life, I have faced significant mental health challenges, including depression, anxiety, OCD, ADHD, and PTSD. There were seasons when I struggled to understand how any good could come from those experiences. Yet God, in His faithfulness, used even my deepest struggles for His glory. Today, He has opened doors for me to encourage and support other Christians who are navigating mental health challenges while seeking to grow in their faith.

I am a certified Spiritual Coach and hold a Diploma in Psychology. I also lead an organization and blog focused on helping Christians better understand the intersection between faith and psychology. My passion is to help believers find hope, healing, and truth through both biblical wisdom and psychological insight.

In addition, I serve with Groundwire, a US-based ministry dedicated to sharing the Gospel of Jesus Christ with hurting people around the world. Through this ministry, I have the privilege of speaking with individuals daily who are searching for hope, purpose, and healing in Christ.

One of the most impactful moments in my ministry journey was visiting India in 2018, where I met and ministered to Christians from the “untouchable” communities. Witnessing their faith despite rejection and hardship deeply shaped my understanding of God’s heart for the marginalized and strengthened my passion for serving others with compassion and humility.

Today, I believe God is continuing to open new opportunities for me to share the Gospel and encourage others through my testimony and ministry. I am continually amazed by His faithfulness and excited to see where He leads next. My desire is simply to be available for His purpose and to point others to the hope, healing, and freedom found in Jesus Christ.`
  },
  {
    id: 2,
    name: "Dr M Mwaqas",
    position: "Bishop Dr.",
    title: "Bishop",
    country: "Pakistan",
    image: MwaqasImage,
    bio: "Bishop Dr. M.M. Waqas, Chairman of One in Christ Ministries in Pakistan has been serving the Lord faithfully for over 30 years.",
    email: "mm.waqas@rhdi.world",
    phone: "+92-123-456-789",
    since: "1985",
    fullBio: `Bishop Dr. M.M. Waqas, Chairman of One in Christ Ministries in Pakistan has been baptized with holy spirit in 1985 and serving the LORD JESUS CHRIST openly in Islamic territory by the help of the Holy Spirit. He is performing the duty of the Lord with Pomp and show through Prayer meetings, crusades, conventions and seminars.

He started his services as a Pastor with THE NATIONAL CHURCH OF PAKISTAN and BISHOP Samson Manoha (retired Magistrate, Collector) blessed him and invited him to join with his ministry. He spent his much time among the Brick kiln workers and poor Christian community, those were unaware about the Lord Jesus Christ. After his efforts and preaching of gospel changed the lived of people and they gathered in the herd of the Lord's Sheep.

During his services, A large number of people accepted Jesus Christ as their saviour. Rev. M.M. Waqas considered the Lord's services his destination and duty. He inaugurated his services of the Lord with Methodist Church in Pakistan in 1990. That time the Chairman of the Methodist Church was Arch Bishop Allama Daniel Tasleem, who was known as Christian scholar in all over the world.

With the blessing of Lord Jesus Christ, Rev. M.M. Waqas started a Secular educational school for the children of brick kiln workers. During the service with the Methodist Church in Pakistan, the LORD Jesus Christ bestowed him with the vision to establish his own Ministry.

He was blessed with holy vision for the Christian community of Bhatta #1, Green Town, Lahore. At this Rev. Waqas visited the Christian families and invited them to gather for worship. They started worship at own house. During his services at Bhatta No.1, a Christian family (His Father, Gulzar Masih) denoted a plot of land for church building.

Now there is a new constructed church building where more than 300 people can sit and worship the Lord Jesus Christ. The Christian community of surrounding areas started to come to worship at this place and learned about the Jesus Christ. He started the Church Services with two or three families as church members and now they are more than five hundred families as church members.

One in Christ Ministries (OICM) is working throughout Pakistan and 120 Pastors are working with OICM and reaching on to un-reached communities to deliver the message of God.`
  },
  {
    id: 3,
    name: "Ibrahim Wanyonyi Bulime",
    position: "REV",
    title: "Reverend",
    country: "Kenya",
    image: IbrahimImage,
    bio: "I was born in 5/5/1962 in Bungoma county western part of Kenya. I surrendered my life to Jesus Christ in 1975.",
    email: "ibrahim.bulime@rhdi.world",
    phone: "+254-123-456-789",
    since: "1989",
    fullBio: `I was born in 5/5/1962 in Bungoma county western part of Kenya. My father's name was Labani Bulime Wopicho and my mother's name was Paulina Khaoma. My father was a heavy machine operator. I surrendered my life to Jesus Christ in 1975 at Faith Baptist church Kiruku, Kikoneni location Kwale county.

I was trained as Social worker. I was a group trainer for Youths, widows, older age, OVCs, behavior change to youths, and find ways to overcome challenges, form groups and train them.

I was brought up in a Christian family and I used to go to church along with my mother every Sunday. I then joined Sunday school teenager and I received Jesus Christ as my personal savior in 1975. I was Baptized in 1976 at Faith Baptist church, Kikoneni location Kwale county.

One day when I had lost hope of living because my body was restless, I had a dream where I saw myself in a big crowd of sick people standing and I was behind them. Suddenly I heard a sound from heaven calling me "Ibrahim" three times telling me to come out and heal the sick. I answered and replied "when my time comes I will do so", and I found myself awake.

The dream came again and I was told that I will not be healed until I serve GOD. One day I visited my Brother in Town and saw posters advertising a crusade: "bring the sick, cripple, blind, they will receive healing in JESUS NAME". I remembered the scripture in Matthew 10:8, and I knew it was my time of healing. When the man of God stepped on the platform saying "Hallelujah", automatically my pain disappeared, disease vanished at that very moment. I was healed in JESUS NAME, it was 1987.

In another dream, I found myself climbing up a house made of glass. Someone opened the door and gave me a certificate. Then somebody appeared to me wearing a white garment very bright with a big Bible, opened it to Mark 16:15-21 and told me to read. I read the scriptures and he vanished.

I'm currently serving God with Greater Destiny Ministry International as a reverend. I have been in ministry serving since 1989. I'm married to Nancy Wanjiru, we are blessed with ten children (one boy and nine girls). My wife is 56 years of age and I'm 63 years of age.`
  },
  {
    id: 4,
    name: "David Asthana",
    position: "Pastor",
    title: "Pastor",
    country: "India",
    image: DavidImage,
    bio: "I am Pastor David Asthana and my wife Rohini Asthana. For the last 12 years we have been Independent Missionary in India.",
    email: "david.asthana@rhdi.world",
    phone: "+91-123-456-7890",
    since: "2013",
    fullBio: `I am Pastor David Asthana and my wife Name Rohini Asthana. For the last 12 years we have been Independent Missionary in India.

From 2013 to 2018 we have planted 40 house churches in India. By grace of God, in 2018 we started a Mission movement called Holy Bride Fellowship Ministries Network. Through this mission network we have trained 5000 leaders for discipleship work in unreached areas and we planted 300 house churches.

In 2022, we were celebrating Christmas program in my own church building and a Hindu radical man came in the church, took pictures and made a video, and complained to police that I am forcefully converting Hindu people to Christianity.

I went to police station and they detained me. On December 19th they sent me to jail and registered a case against my wife and 9 more church leaders. They arrested 22 different independent Pastors and sent them all to jail. They made fake news and registered a report claiming I was the leader of this Pastors group and was funding them to forcefully convert Hindu people to Christianity. The truth is I didn't know these Pastors who came to jail, but police charged me with a fake case.

In May 2023 I got bail and came out of Jail. My friends and lawyer suggested it's better if I stay away from this area. In August 2023 we came to Nepal. Police forcefully blocked my church building and took it under the government.

Now we have been staying in Nepal for two years. During this time, if God opens the door for monthly financial help, we are looking to start a Hindi church in Nepal. We need at least $350-400 monthly support so we can do mission work in Nepal more freely and take care of our court case.

My wife and I have a vision to train local pastors/leaders in India and Nepal through the word of God.`
  },
  {
    id: 5,
    name: "Franklin Ewane & Ebontane Charles Sone",
    position: "APOSTLE",
    title: "Apostle",
    country: "Cameroon",
    image: MaryImage,
    bio: "About 30 Years Ministry experience, after Bible school in 1991i was posted to my own Town, worked with the Free Methodist World Missions for more than 10Years and then in 2004 started Light And life Mission Cameroon Fill My Cup Ministries International USA, Mentorship International Ministries",
    email: "lightandlifemissionchurch@gmail.com",
    phone: "+237676709303 & +237641266070",
    since: "",
    fullBio: `Light And life Mission Cameroon carry out different activities like Church planting, Discipleship,Training, Orphanage,Vocational training,Ministry to Refugees, Bible distribution project., Youths Ministry, Women's Ministry.
Through Church planting, we have been able to plant Churches in different areas of Country and also in Nigeria.
Discipleship is helping us to Mentor so many Children also carrying out Discipleship Training.
Training has given us the opportunity to have a Bible school that has trained so many Pastors and Leaders.
The Orphanage that God told me to open before Crisis began in the two English speaking Regions of Cameroon is being a blessing to Orphans, Abandoned and Refugees.
Our Vocational training Center is to train Orphans, Abandoned and Refugees in Computer Software and hardware, Hair dressing, Sowing, English and French has impacted many lives in our Community.`
  },
  {
    id: 6,
    name: "Jennifer A",
    position: "Director Of Communication",
    title: "Apostle",
    country: "USA",
    image: JenniferImage,
    bio: "Born on 1/31/1983 in Greenville, SC. Saved in 2002 and baptized in 2012.",
    email: "jennifer.a@rhdi.world",
    phone: "+1-864-123-4568",
    since: "2022",
    fullBio: `Born on 1/31/1983 in Greenville, SC to Jack Stephen Ford and Nannie Louise Ford. My father was a mobile home repair specialist and is now retired.

I was saved in 2002 and baptized in 2012. I was not allowed to go forward with my calling at that time due to abuse, so the Lord was patient and did not take my calling.

In 2022 I met my husband, Tunde Afeniforo who began praying with me for the spiritual battle to be cast down in Jesus name. It was then that the Lord healed me from many things at once - polymyositis, restrictive lung disease, type 2 diabetes, depression, sleep apnea, many of which were spiritual attacks.

In 2023 the Holy Spirit led us to raise Afeniforo Global Outreach Ministries for Orphans/children, widows/women, and men's outreach. Although I was not raised in a family that attended church, I always felt pulled towards Africa and Jesus.

My husband and I are blessed with 3 children, ages 7, 4, and 16. My husband is 34 years of age and I'm 41 years of age.`
  },
  {
    id: 7,
    name: "Rev. Deng James Bol Jok",
    position: "President & CEO",
    title: "Reverend",
    country: "South Sudan",
    image: KabambiImage,
  
    bio: "Rev. Deng James Bol Jok is the Founder, President, and CEO of Christians Initiative for Development Aid (CIDA), a South Sudan-based Christian organization dedicated to discipleship, humanitarian outreach, church planting, and community development.",
  
    email: "deng.james@rhdi.world",
    phone: "+211-123-456-789",
    since: "2013",
  
    fullBio: `Rev. Deng James Bol Jok is the Founder, President, and Chief Executive Officer of Christians Initiative for Development Aid (CIDA), a registered national Christian organization headquartered in Aweil, Northern Bahr el Ghazal State, South Sudan.
  
  Through CIDA, he has established four schools that provide education and care for orphaned and vulnerable children:
  
  • Light Academy Primary School
  • Christ the King Orphanage Primary School
  • Emmanuel Orphanage Secondary School
  • River of Life Christian Primary School
  
  These institutions serve children from the five counties of Northern Bahr el Ghazal, providing education, hope, and Christian values.
  
  Since beginning his ministry in 2013, Rev. Deng has focused on evangelism, discipleship, church planting, biblical teaching, leadership development, healing ministry, youth and children's ministry, women's ministry, counseling, humanitarian outreach, and community transformation.
  
  His ministry also serves vulnerable communities through projects that include:
  
  • Orphan and widow support
  • Disability assistance
  • Agricultural development
  • Healthcare initiatives
  • Bible distribution
  • Pastors' training
  • Village Savings and Loans groups
  • Water and sanitation projects
  • Borehole drilling and solar water systems
  • Emergency response and flood resilience
  • Community development programs
  
  CIDA currently serves more than 4,500 church members and has planted ten churches throughout Northern Bahr el Ghazal. The ministry is committed to expanding the Gospel throughout South Sudan and beyond.
  
  Rev. Deng has a special burden for orphans, widows, people living with disabilities, vulnerable children, and underserved communities. His vision is to see lives transformed spiritually, socially, and economically through the power of Jesus Christ.
  
  One of his greatest desires is to reach remote villages with the Gospel through evangelistic outreach and Jesus Film presentations, believing that thousands of communities have never had the opportunity to hear the Good News.
  
  Rev. Deng desires to partner with Rehoboth Discipleship International (RDI) because he believes strong biblical discipleship is essential for raising faithful Christian leaders and restoring sound biblical teaching within the Church. He looks forward to collaborating in leadership development, pastor training, community transformation, humanitarian assistance, and discipleship initiatives that will strengthen churches and improve the lives of people throughout South Sudan.`
  },
  {
    id: 8,
    name: "Vivek Das",
    position: "RDI Team",
    title: "Missionary",
    country: "Nepal",
    image: VivekImage,
    bio: "I am Vivek Das and have been involved in the ministry along with my wife Rekha and two sons in Nepal.",
    email: "vivek.das@rhdi.world",
    phone: "+977-123-456-789",
    since: "2000",
    fullBio: `Christian greetings to all in the sweet and marvelous name of Lord and Savior Jesus Christ!

I am Vivek Das and have been involved in the ministry along with my wife Rekha and two sons Utkarsh and Ujjawal in Nepalganj. God is using me marvelously and it is through the grace of Lord Jesus Christ that my ministry has been blessed tremendously in different parts of Nepal.

I was born and brought up in a believer's family but since my father was not much interested in prayer or church services we too had the same effect on us. We occasionally went to the church especially on special occasions like Christmas and Easter.

The Lord touched my heart when I was 16 years old and I happened to attend a convention. The message of the speaker for the night really touched my heart. His message was a calling for the laborers into His vineyard to cut the plentiful harvest. I was deeply touched and after returning home I kept pondering upon the message. Gradually I felt the burden in my heart and received Jesus as my personal Savior and dedicated my life for His ministry.

I joined a Bible college in Allahabad to gain more knowledge about the Bible and become an effective missionary. After graduation, Jesus put a burden in my heart for Uttar Pradesh and I started pastoral ministry in various churches in Jaunpur and Balrampur.

In the year 2000, God opened a way for me to come to the Border area of Nepal called Rupeidia. There I started my ministry as an assistant pastor of Assemblies of God.

Through my 23 years of ministry, God has used me tremendously to touch and transform people and communities. When I was working in an NGO, Jesus enabled me to restore 30 drug addicts into normal life and among them 8 people have now become His servants.

My main focus was among Madheshi people group who are the largest unreached people group in Nepal. Through my ministry, 45-50 people have now become baptized believers in my church in Nepalganj. I also established a tuition center among this people group to educate the children.

At present, around 40 men and 11 women are being trained and equipped in God's word who will become agents of transformation in Nepal. Through His grace, I have established 40 churches in Nepalganj and its nearby areas.

In the nearby future, I desire to establish 150 churches in Nepalganj and its surrounding areas. I also desire to provide clean drinking water, sanitary facilities and other necessary things to the unreached Dalit villages of Nepal.`
  },
  {
    id: 9,
    name: "Lawson Limao ",
    position: "Pastor",
    title: "Pastor",
    country: "Zambia",
    image: AnthonyImage,
    bio: "I heard about RDI last year through LinkedIn. I was inspired by what the Lord is doing through RDI,",
    email: "",
    phone: "",
    since: "",
    fullBio: `I heard about RDI last year through LinkedIn. I was inspired by what the Lord is doing through RDI, as discipling believers is my passion. The experience I have gained from the two meetings has been enriching, as I have learned that discipleship is generational. We see this modeled in the relationship between Paul and Timothy. This has opened my eyes to understand that the church should prioritize discipleship in their congregations for generations to come`
  },
  {
    id: 10,
    name: "Duncan Matoga",
    position: "RDI Coordinator",
    title: "Pastor",
    country: "Malawi",
    image: DuncanImage,
    bio: "I am Duncan Matoga, aged 42, RDI Coordinator for Malawi, serving the Lord through discipleship.",
    email: "duncan.matoga@rhdi.world",
    phone: "+265-123-456-789",
    since: "2016",
    fullBio: `I am Duncan Matoga, aged 42, RDI Coordinator, happily married to Joyce Chibowo with four kids - a son and daughters. I'm residing at Ngabu, Chikwawa District, Southern Region of Malawi.

Currently, I am a Radio Presenter at one of the Community Radio stations known as Chibvomelezi FM and I'm also a Pastor of Universal with God (Maranatha) Church, where I am a founder and leading Pastor since 2016.

As Universal Church of God, we have five branches in Malawi.

I would like to thank Apostle Dr Daniel for my appointment as RDI Coordinator in my local country Malawi. This is an honor and I don't take it for granted. We will together work for God's kingdom.`
  },
  {
    id: 11,
    name: "Emmanuel Amara Vandi Fomba",
    position: "Africa Coordinator",
    title: "Ambassador Pastor",
    country: "Sierra Leone",
    image: EmmanuelImage,
    bio: "Ambassador Pastor Emmanuel Amara Vandi Fomba is a Sierra Leonean born on 13th February 1978.",
    email: "emmanuel.fomba@rhdi.world",
    phone: "+232-123-456-789",
    since: "2003",
    fullBio: `Ambassador Pastor Emmanuel Amara Vandi Fomba is a Sierra Leonean born on the 13th February 1978 in Kailahun District, the Eastern Province of the Republic of Sierra Leone.

He has a B.A in Theology and Church Management from the Grace International Bible University in the USA and Liberia, a Postgraduate Diploma in International Human Resource Management from the Cambridge International Qualification, UK, and a Higher National Diploma in Management Studies.

He has over 20 years' experience in Ministry and Church Planting, soul winning, pastoring and church Management. Ambassador Fomba has ministered in India, Ghana, UK and other countries in Africa.

Ambassador Pastor Emmanuel Amara Vandi Fomba is a dedicated Human Rights and Development Activist with vast experiences gained from working with other Human Rights Institutions. He has served as the Global President of the Global Human Rights Campaign, Country Director of the International Human Rights Commission, Director of Administration and Finance of the Christian Hands on Women and Children in Need, National Director of Nation Builders CM Network Africa, and many other local and international organizations.

Ambassador Fomba participated in the achievement of peace through peace building networks with other likeminded Human Rights organizations during the decade of barbaric civil war in Sierra Leone that led to the loss of so many lives.

As a Religious leader, Emmanuel is currently serving as the Africa Coordinator of the World Movers International Church.

He has passion in working with and protecting the rights of vulnerable women, children and the physically challenged persons. In 2010, Ambassador Fomba led a protest that compelled the government of Sierra Leone to allocate seven (7) acres of land to the physically challenged persons that were subjected to street begging and sleeping in dilapidated vehicles and open markets at night.

Through his leadership as a Human Rights Activist, over 3,000 vulnerable children were enrolled in schools, some are now in universities whilst others have completed their universities and are currently engaged in gainful employments, contributing to the national development of their country.`
  }
];

// Staff Card Component
const StaffCard = ({ staff, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      onClick={() => onClick(staff)}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      {/* Staff Image - Imeboreshwa kwa urefu kamili */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
        {staff.image ? (
          <img 
            src={staff.image} 
            alt={staff.name}
            className="w-full h-full object-contain bg-gray-50 p-2 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl text-gray-400">👤</span>
          </div>
        )}
        
        {/* Country Badge */}
        <div className="absolute bottom-4 right-4 bg-blue-600/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-xs font-medium text-white">{staff.country}</span>
        </div>
      </div>

      {/* Staff Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{staff.name}</h3>
        <p className="text-blue-600 font-medium mb-3">{staff.position}</p>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{staff.bio}</p>
        
        {/* Read More Button */}
        <motion.div
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold group"
        >
          Read More
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Staff Details Modal Component - Imeboreshwa
const StaffDetailsModal = ({ staff, onClose }) => {
  if (!staff) return null;

  // Split bio into paragraphs for better display
  const bioParagraphs = staff.fullBio.split('\n\n').filter(p => p.trim() !== '');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header with Image - Imeboreshwa kwa urefu kamili */}
        <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
          {staff.image ? (
            <img 
              src={staff.image} 
              alt={staff.name}
              className="w-full h-full object-contain bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl text-white/50">👤</span>
            </div>
          )}
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Staff Name Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
            <h2 className="text-4xl font-bold text-white mb-1">{staff.name}</h2>
            <p className="text-2xl text-blue-300">{staff.position}</p>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-8">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-sm">{staff.country}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4 text-blue-600" />
              <a href={`mailto:${staff.email}`} className="text-sm hover:text-blue-600 transition-colors">
                Email
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4 text-blue-600" />
              <a href={`tel:${staff.phone}`} className="text-sm hover:text-blue-600 transition-colors">
                Call
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="text-sm">Since {staff.since}</span>
            </div>
          </div>

          {/* Full Biography */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Biography
            </h3>
            <div className="space-y-4">
              {bioParagraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Ministry Highlights */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Ministry Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <Heart className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Years of Service</h4>
                  <p className="text-gray-600">{new Date().getFullYear() - parseInt(staff.since)}+ years</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                <Globe className="w-5 h-5 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Country</h4>
                  <p className="text-gray-600">{staff.country}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <motion.a
            href={`mailto:${staff.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all"
          >
            Contact {staff.name}
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main OurStaff Component
const OurStaff = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  // Get unique countries for filter
  const countries = ['all', ...new Set(staffData.map(staff => staff.country))];

  // Filter staff by country
  const filteredStaff = filter === 'all' 
    ? staffData 
    : staffData.filter(staff => staff.country === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="relative bg-[#001a3d] py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            MEET OUR STAFF
          </motion.h1>
          <motion.p  
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-200 max-w-2xl mx-auto"
          >
            This is our dedicated team who work day-in and day-out together to advance God's kingdom through discipleship.
          </motion.p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Our Team ({filteredStaff.length})</h2>
          
          {/* Country Filter */}
          <div className="flex flex-wrap gap-2">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setFilter(country)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === country
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {country === 'all' ? 'All Countries' : country}
              </button>
            ))}
          </div>
        </div>

        {/* Staff Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredStaff.map((staff) => (
              <StaffCard 
                key={staff.id} 
                staff={staff} 
                onClick={(staff) => setSelectedStaff(staff)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredStaff.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-500">No staff found in {filter}</p>
            <button
              onClick={() => setFilter('all')}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
            >
              View All Staff
            </button>
          </motion.div>
        )}
      </div>

      {/* Staff Details Modal */}
      <AnimatePresence>
        {selectedStaff && (
          <StaffDetailsModal 
            staff={selectedStaff} 
            onClose={() => setSelectedStaff(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurStaff;