import { Component, OnInit } from '@angular/core';
import { PagenumberService } from '../Services/pagenumber.service';
import { Sections, result, top3srctions } from '../intrfaces/sections';
import { Route, Router } from '@angular/router';
import { SendResultService } from '../Services/send-result.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit{


    currHead:string[]=[]
    constructor(private page:PagenumberService , private route:Router ,private finalData:PagenumberService , private sendsturesult:SendResultService){

    }

    ngOnInit(): void {
        this.page.pageNumber$.subscribe((n)=>{
            this.done=n

            if(n<6){
                this.currHead=this.headers[0]
            }else if(n>=6 && n<12){
                this.currHead=this.headers[1]
            }
            else if(n>=12&&n<18){
                this.currHead=this.headers[2]
            }else if(n>=18&&n<20){
                this.currHead=this.headers[3]
            }
        })
    }

done:number=0


first:string[]=[]
second:string[]=[]
third:string[]=[]

headers:string[][]=[
    ["*ظلل خانة(نعم) بالنسبة للانشطة التي ترغب في القيام بها","*ظلل خانة (لا) بالنسبة للانشطة اللتي لا ترغب في القيام بها .",
    "mark the box (yes) for the ativities you would like to do.","mark the box (no) for the activities that you do not want to do ."],
    ["*ظلل خانة(نعم) بالنسبة للانشطة التي يمكنك القيام بها جيدا","*ظلل خانة (لا) بالنسبة للانشطة اللتي لا يمكنك القيام بها او تنجزها بصورة ضعيفة .",
    "mark the box (yes) for the ativities you can do well.","mark the box (no) for the activities that you cannot do or do poorly ."],
    ["*ما يلي جرداً لشعورك ومواقفك تجاه انواع كثيرة من العمل اختر الوظائف اللتي تثير اهتمامك او رغبتك بتظليل خانة (نعم)","* كذلك بين الوظائف اللتي لا تلائم رغباتك عبر تظليل (لا)",
    "The following is an inventory of your feelings and attitudes towards many types of work. choose the jobs that arouse your interest or desire by shading the box with (yes)"," and also among the jobs that do not suit your desires by shading the word (no)"],
    ["قارن نفسك في كل من المزايا التالية علي ضوء رؤيتك لذاتك قم بأعطاء التقييم الاكثر دقة للكيفية اللتي ترى بها نفسك"," قم بتظليل دائرة الرقم المناسب مع تجنب مقارنة نفسك بذات الرقم في كل مقدرة  مع العلم ان رقم (1) هو اقل تقييم ورقم (7) هو اعلي تقييم ;","compare yourself in each of the following features in light of your vision of yourself . give the most accurate evaluation of how you see yourself .",
    " circle the appropriate number while avoiding comparing yourself to the same number in each ability. Knowing that (1) is the lowest rating and (7) is the highest rating;"]

]

 data:string [][][]=[
    [
      [ " Installing electrical appliances ","تركيب أجهزة كهربائية ","1"],
       [ " Car repair ","إصلاح السيارات ","2"],
       [ " Installing mechanical objects ","تركيب أشياء ميكانيكية ","3"],
       [ " Constructing things out of wood ","تشييد أشياء من الخشب ","4"],
       [ " Take a technical education course, such as industrial art and others.  ","أخذ دورة تعليم تقني 'مثل الفن الصناعي وغيره'","5"],
       [ " Take a mechanical drawing course ","أخذ دورة رسم ميكانيكي ","6"],
       [ " Take a course in woodworking  ","أخذ دورة في أعمال خشبية ","7"],
       [ " Take a course in auto mechanics  ","أخذ دورة في ميكانيكا السيارات ","8"],
       [ " Work with an outstanding mechanic or technician  ","العمل مع ميكانيكي أو فني بارز ","9"],
       [ " Working outside the home  ","العمل خارج المنزل ","10"],
       [ " Operate moving tools or machines  ","تشغيل أدوات أو آلات متحركة ","11"]

    ],[
       [ " Reading books or scientific journals ","قراءة كتب أو مجلات علميه  ","1"],
        [ " Work in a research office or laboratory  ","العمل في مكتب بحث أو مختبر ","2"],
        [ " Working on a scientific project  ","العمل في مشروع علمي ","3"],
        [ " Scientific theoretical study  ","دراسة نظرية علمية ","4"],
        [ " Working with chemists  ","العمل مع كيميائيين ","5"],
        [ " Applying mathematics to solve scientific problems  ","تطبيق الرياضيات لحل مسائل علميه ","6"],
        [ " Take a course in physics   ","اخذ دورة في الفيزياء ","7"],
        [ " Take a course in chemistry   ","اخذ دوره في الكيمياء ","8"],
        [ " Take a mathematics course  ","اخذ دورة في الرياضيات ","9"],
        [ " Take a course in biology  ","أخذ دورة في الأحياء ","10"],
        [ " Study of intellectual or technical problems  ","دراسة مشكلات فكرية أو تقنيه  ","11"]
    ],[
       [ " Engineering drawing, drawing or painting  ","الرسم التخطيطي أو الرسم أو التلوين   ","1"],
        [ " Design furniture, clothing or posters  ","تصميم أثاث أو ثياب أو ملصقات ","2"],
        [ " Performing in a band or musical group  ","الأداء ضمن فرقة أو مجموعة موسيقية ","3"],
        [ " Playing a musical instrument  ","عزف على آلة موسيقية ","4"],
        [ " Draw portraits or other images  ","رسم صور شخصية أو صور أخرى ","5"],
        [ " Writing novels or plays  ","كتابة روايات أو مسرحيات ","6"],
        [ " He took his turn in art   ","أخذ دوره في الفن  ","7"],
        [ " Synthesize or synthesize music of any kind   ","توليف أو تركيب موسيقى من أي نوع ","8"],
        [ " Work with a talented musician, writer, or sculptor  ","العمل مع موسيقى أو كاتب أو نحات موهوب ","9"],
        [ " Dancing or singing  ","الرقص أو الغناء ","10"],
        [ " Reading artistic, literary or musical topics  ","قراءة موضوعات فنية أو أدبية أو موسيقية   ","11"]
    ],[
       [ " Interview important educators or psychotherapists  ","مقابلة تربويين مهمين أو معالجين نفسيين ","1"],
        [ " Readers writing or topics in sociology.  ","قراء تكتبا أو موضوعات في علم الاجتماع. ","2"],
        [ " Working for a charitable organization.  ","العمل لجمعيه خيريه . ","3"],
        [ " Helping others solve their own problems.  ","مساعدة الآخرين على حل مشاكلهم الخاصة. ","4"],
        [ " Study of youth delinquency  ","دراسة انحراف الشباب ","5"],
        [ " Read books and topics on psychology  ","قراءة كتب وموضوعات علم النفس ","6"],
        [ " He took a course in human relations.   ","أخذ دوره في العلاقات الانسانيه . ","7"],
        [ " Teaching in a secondary school.  ","التدريس بمدرسة ثانوية . ","8"],
        [ " Supervising activities for mentally ill patients  ","الإشراف على أنشطه للمرضى العقليين ","9"],
        [ " Teaching adults.  ","تدريس الكبار. ","10"],
        [ " Work as a volunteer  ","العمل كمتطوع  ","11"]
    ],
    [
       [ " Learn plans for success in business administration.  ","تعلم خطط النجاح في أدارة الأعمال.  ","1"],
        [ " Managing my own business. ","إدارة أعمالي الخاصة . ","2"],
        [ " Attend sales conferences  ","حضور مؤتمرات المبيعات ","3"],
        [ " Take a short course on management or leadership  ","أخذ دوره قصيرة حول الإدارة أو القيادة  ","4"],
        [ " Serve as an officer for any group  ","العمل كضابط لأي مجموعه ","5"],
        [ " Supervising the work of others  ","الإشراف على عمل الآخرين ","6"],
        [ " Interviewing influential leaders and executives.  ","مقابلة القادة والتنفيذيين النافذين. ","7"],
        [ " Leading a group in achieving some goals  ","قيادة مجموعه في انجاز بعض الأهداف  ","8"],
        [ " Participation in a political or electoral campaign  ","المشاركة في حمله سياسيه أو انتخابية ","9"],
        [ " Working as an administrative or organizational consultant.  ","العمل كاستشاري أدارى أو تنظيمي .  ","10"],
        [ " Read business topics and magazines  ","قراءة موضوعات ومجلات الأعمال  ","11"]
    ],
      [
      [ " Filling out income tax and zakat forms  ","تعبئة استمارات ضريبة الدخل والزكاة  ","1"],
        [ " Carrying out arithmetic work or keeping books  ","القيام بالأعمال الحسابية أو حفظ الدفاتر ","2"],
        [ " Operating office devices  ","تشغيل أجهزة المكتب ","3"],
        [ " Maintain accurate records of expenses  ","الاحتفاظ بسجلات دقيقه للمصروفات  ","4"],
        [ " Establish a record-keeping system ","وضع نظاما لحفظ السجلات ","5"],
        [ " Take a course in accounting  ","اخذ دوره في المحاسبة ","6"],
        [ " He took his turn in the trading account  ","أخذ دوره في الحساب التجاري  ","7"],
        [ "Taking inventory of supplies or products  ","القيام بجرد الإمدادات أو المنتجات ","8"],
        [ " Check products or paperwork for errors.  ","فحص المنتجات أو الأعمال الورقية لمعرفة الأخطاء. ","9"],
        [ " Update records or files ","تحديث السجلات أو الملفات  ","10"],
        [ " Working in an office ","العمل بمكتب  ","11"]
    ],
    [
        [ " I used carpentry tools such as an electric saw and a lathe.  ","استعملت أدوات ورشه النجارة كالمنشار الكهربائي والمخرطة.  ","1"],
        [ " I can make a scale drawing.  ","أستطيع عمل مقياس رسم . ","2"],
        [ " I can replace the car's oil or tire.  ","استطيع استبدال زيت أو إطار السيارة . ","3"],
        [ " You operate powered tools such as a drill, heater or sewing machine.  ","قمت بتشغيل أدوات تعمل بالطاقة مثل جهاز الحفر، السخان أو ماكينة الخياطة .  ","4"],
        [ " I can refinish furniture or woodwork.  ","استطيع أعادة إكمال الأثاث أو الأعمال الخشبية. ","5"],
        [ " I can do simple electrical repairs.  ","استطيع القيام بالإصلاحات الكهربية البسيطة. ","6"],
        [ " I can do furniture repair.  ","استطيع القيام بإصلاح الأثاث.  ","7"],
        [ " I can use many carpentry tools.  ","استطيع استعمال العديد من أدوات النجارة. ","8"],
        [ " I can do simple plumbing work.  ","استطيع القيام بأعمال السباكة البسيطة. ","9"],
        [ " I can build simple wooden buildings.  ","استطيع تشييد ابنيه خشبية بسيطة.  ","10"],
        [ " I can paint rooms of a house or apartment. ","استطيع طلاء حجرات منزل أو شقه.  ","11"]
    ],
    [
        [ " I can use algebra to solve math problems.  ","استطيع استخدام الجبر لحل مسائل رياضيه.  ","1"],
        [ " I can conduct an experiment or scientific survey.  ","استطيع القيام بتجربة أو مسحا علميا.  ","2"],
        [ " Understand the half-life of a radioactive element.  ","افهم نصف العمر ' لعنصر مشع. ","3"],
        [ " I can use a logarithm table.  ","استطيع استعمال جدول اللوغريتمات.  ","4"],
        [ " I can use the computer to study a scientific problem.  ","استطيع استعمال الحاسوب لدراسة مسألة علميه.  ","5"],
        [ " I can describe the function of white blood cells.  ","استطيع وصف وظيفة خلايا الدم البيضاء. ","6"],
        [ " I can explain a simple chemical equation.  ","استطيع تفسير معادله كيمائية بسيطة.  ","7"],
        [ " Understand why satellites do not fall to Earth.  ","افهم سبب عدم سقوط الأقمار الصناعية على الأرض.  ","8"],
        [ " I can write a scientific report.  ","استطيع كتابة تقريرا علميا. ","9"],
        [ " Understand the Big Bang theory of the universe.  ","افهم نظرية الانفجار الكبير للكون.  ","10"],
        [ " Understand the role of genetic factor in genetics. ","افهم دور العامل الوراثي في الوراثة.  ","11"]
    ],
    [
      [ " I can play a musical instrument.  ","أستطيع العزف على آله موسيقيه.  ","1"],
        [ " I can participate in duet or group singing.  ","استطيع المشاركة في غناء ثنائي أو جماعي.  ","2"],
        [ " I can perform as a solo musician.  ","استطيع الأداء كموسيقى منفرد.  ","3"],
        [ " I can act in a play.  ","استطيع التمثيل في مسرحيه.  ","4"],
        [ " I can do interpretive reading.  ","استطيع القيام بقراءة تفسيريه.  ","5"],
        [ " I can draw, use water colors or sculpt.  ","استطيع القيام بالرسم ، استخدام ألوان الماء أو النحت.  ","6"],
        [ " I can synthesize or compose music.  ","استطيع توليف أو تأليف موسيقى.  ","7"],
        [ " I can design clothes, posters or furniture.  ","استطيع تصميم ثياب، ملصقات أو أثاث.   ","8"],
        [ " I write good stories or poetry.  ","أنا اكتب قصصا أو شعرا بصوره جيده.  ","9"],
        [ " I can write a speech.  ","استطيع كتابة حديثا.  ","10"],
        [ " I can take attractive pictures. ","استطيع اخذ صوراً جذابة.  ","11"]
    ],
    [
        [ " I find it easy to talk to all types of people.  ","أجد سهوله في التحدث إلى كل أنماط البشر.  ","1"],
        [ " I'm good at explaining things to others.  ","أنا بارع في تفسير الأشياء للآخرين.  ","2"],
        [ " I can work as an organizer for neighbors  ","استطيع العمل كمنظم لأمور الجيران  ","3"],
        [ " People seek to talk about their problems.  ","يسعى الناس إلى للحديث عن مشكلاتهم. ","4"],
        [ " I can easily teach children.  ","استطيع بسهوله تدريس الأطفال.  ","5"],
        [ " I can easily teach adults.  ","استطيع بسهوله تدريس الكبار.  ","6"],
        [ " I'm good at helping people with anxiety or problems  ","أنا بارع في مساعدة الناس الذين يعانون من قلق أو مشكلات  ","7"],
        [ " I have a good understanding of social relationships.  ","أتمتع بفهم جيد للعلاقات الاجتماعيه.  ","8"],
        [ " I am good at teaching others.  ","أنا بارع في تدريس الآخرين.  ","9"],
        [ " I'm good at calming people down.  ","أنا بارع في تهدئة الناس.  ","10"],
        [ " I deal with people better than I deal with things or ideas.  ","تعاملي مع الناس أفضل من تعاملي مع الأشياء أو الأفكار.  ","11"]
    ],
    [
        [ " I know how to be a successful leader.  ","اعرف كيف أكون قائداً ناجحاً.  ","1"],
        [ " I am an ambitious and determined person.  ","أنا شخص طموح وحازم.  ","2"],
        [ " I am an articulate orator.  ","أنا خطيب مفوه.  ","3"],
        [ " I can manage a sales campaign.  ","استطيع أدارة حملة مبيعات.  ","4"],
        [ " I can organize the work of others.  ","استطيع تنظيم عمل الآخرين.  ","5"],
        [ " I'm good at getting people to do it my way.  ","أنا بارع في جعل الناس يعملون حسب طريقتي.  ","6"],
        [ " I am a good debater.  ","أنا مناقش جيد.  ","7"],
        [ " I'm a good sales guy.  ","أنا رجل مبيعات جيد.  ","8"],
        [ " I can be persuasive.  ","استطيع أن أكون مقنعا.  ","9"],
        [ " I have good planning skills.  ","أتمتع بمهارات تخطيط جيده.  ","10"],
        [ " I have some driving skills.  ","لدي بعض مهارات القيادة.  ","11"]
    ],
    [
        [ " I can save and organize correspondence and other papers.  ","استطيع حفظ وترتيب المراسلات والأوراق الأخرى. ","1"],
        [ " I got an office job.  ","لقد حصلت على وظيفة مكتبيه. ","2"],
        [ " I can use the automatic transmitter.  ","استطيع استخدام جهاز الإرسال التلقائي. ","3"],
        [ " I can complete a lot of papers in a short time.  ","استطيع انجاز الكثير من الأوراق في وقت قصير.","4"],
        [ " I can use a simple device to process the data.  ","استطيع استعمال جهازاً بسيطاً لمعالجة البيانات. ","5"],
        [ " I can arrange debts and balances.  ","استطيع ترتيب الديون والأرصده. ","6"],
        [ " I can keep accurate records of payments and sales.  ","استطيع حفظ سجلات دقيقه للمدفوعات والمبيعات. ","7"],
        [ " I can enter data into the computer.  ","استطيع إدخال البيانات في الحاسوب. ","8"],
        [ " I can write business letters.  ","استطيع كتابة رسائل خاصة بالعمل. ","9"],
        [ " I can do some routine office work. ","استطيع القيام ببعض الأعمال المكتبية الروتينيه. ","10"],
        [ " I am an organized and tidy person.  ","أنا إنسان منظم ومرتب. ","11"]
    ],
    [
        [ " Aircraft mechanic ","ميكانيكي طائرات ","1"],
        [ " car mechanic ","ميكانيكي سيارات ","2"],
        [ " Carpenter ","نجار ","3"],
        [ " Heavy truck driver ","سائق شاحنه ثقيلة ","4"],
        [ " Surveyor","مساح ","5"],
        [ " Construction inspector ","مفتش بناء  ","6"],
        [ " Connection mechanic","میکانیکی اتصال  ","7"],
        [ " Automotive engineer ","مهندس سيارات  ","8"],
        [ " Equipment worker ","عامل أجهزه  ","9"],
        [ " Electrician  ","كهربائي  ","10"],
        [ " farmer","مزارع  ","11"],
        [ " Helicopter pilot ","طيار طائرة عموديه  ","12"],
        [ " Electronics Technician ","فني الكترونيات  ","13"],
        [ " Blacksmith","حداد ","14"]
    ],
    [
       [ " Meteorological officer ","موظف أرصاد ","1"],
        [ " Biologist ","عالم أحياء ","2"],
        [ " astronomical  ","فلكي  ","3"],
        [ " Medical laboratory technician ","فني مختبر طبي ","4"],
        [ " An ethnologist","عالم أجناس  ","5"],
        [ " pharmacist ","صيدلي ","6"],
        [ " Independent research scholar ","عالم بحث مستقل ","7"],
        [ " Scientific topics writer","كاتب موضوعات علميه ","8"],
        [ " Geologist ","جيولوجي ","9"],
        [ " Botanist   ","عالم نبات   ","10"],
        [ " Scientific research employee ","موظف بحث علمي   ","11"],
        [ " physicist ","فيزيائي ","12"],
        [ " A social science researcher ","باحث علوم اجتماعيه ","13"],
        [ " Environmental Analyst ","محلل بيئي  ","14"]
    ],
    [

        [ " Entertainment store owner ","صاحب محل ترفيه ","1"],
        [ " A poet ","شاعر ","2"],
        [ " Music   ","موسیقی   ","3"],
        [ " Novelist ","رواني ","4"],
        [ " Actor / Actress ","ممثل ممثله ","5"],
        [ " Freelance writer  ","كاتب متفرغ ","6"],
        [ " Music Distributor ","موزع موسيقى ","7"],
        [ " A Journalist ","صحفي ","8"],
        [ " An Artist  ","فنان  ","9"],
        [ " A Singer    ","مغنی ","10"],
        [ " A Composer ","ملحن ","11"],
        [ " A Sculptor  ","نحات  ","12"],
        [ " Dramatist ","كاتب مسرحي ","13"],
        [ " Cartoonist ","رسام كاريكاتير ","14"]
    ],
    [

        [ " HR Supervisor ","مشرف وظائف ","1"],
        [ " Sociologist  ","عالم اجتماع ","2"],
        [ " Secondary Teacher    ","مدرس ثانوي ","3"],
        [ " Quality Assurance Supervisor  ","مشرف ضمان جوده  ","4"],
        [ " Youth Delinquency Expert  ","خبير انحراف الشباب ","5"],
        [ " Speech Therapy Specialist  ","أخصائي علاج نطق ","6"],
        [ " Family Counselor  ","مرشد اسري ","7"],
        [ " Lab Psychologist  ","أخصائي نفس معملي  ","8"],
        [ " Social Sciences Teacher ","مدرس علوم اجتماعية  ","9"],
        [ " Personal  Counselor ","مرشد شخصي  ","10"],
        [ " Youth Camp Counselor  ","مرشد مخيم شباب ","11"],
        [ " Social Worker  ","موظف خدمات اجتماعيه ","12"],
        [ " Rehabilitation Counselor","مرشد إعادة تأهيل ","13"],
        [ " Playground Manager ","مدير ساحة لعب ","14"]
    ],
    [

        [ " Purchasing officer ","موظف مشتريات ","1"],
        [ " Advertising Executive   ","تنفيذي إعلانات ","2"],
        [ " Factory representative ","مندوب مصنع ","3"],
        [ " Business executive ","تنفيذي أعمال ","4"],
        [ " Celebration organizer  ","منظم احتفالات ","5"],
        [ " Sales Officer ","موظف مبيعات ","6"],
        [ " Real estate employee ","موظف عقارات ","7"],
        [ " general relations employee ","موظف علاقات عامه  ","8"],
        [ " Warehouse manager ","مدیر مخازن ","9"],
        [ " Sales Manager  ","مدير مبيعات ","10"],
        [ " TV station manager ","مدير محطة تلفزيونيه ","11"],
        [ " Small business owner ","صاحب أعمال صغيره ","12"],
        [ " Lawgiver ","مُشَرِع ","13"],
        [ " Airport manager ","مدير مطار ","14"]
    ],
    [

        [ " Archive employee  ","أمين دفاتر ","1"],
        [ " Chartered Accountant  ","محاسب قانوني عمومي ","2"],
        [ " Tax expert  ","خبير ضرائب ","3"],
        [ " Budget References  ","مراجع میزانیه ","4"],
        [ " Inventory organizer  ","منظم جرد ","5"],
        [ " Financial Analyst  ","محلل مالي ","6"],
        [ " Payroll employee  ","موظف مرتبات  ","7"],
        [ " Bank employee  ","موظف مصرف ","8"],
        [ " Computer Operator  ","مشغل حاسوب ","9"],
        [ " Credit references  ","مراجع رصيد ","10"],
        [ " Bank teller  ","صراف مصرف ","11"],
        [ " Estimated cost ","مقدر تكلفه ","12"],
        [ " Accounts employee ","موظف حسابات ","13"],
        [ " Financial audit officer ","موظف مراجعه ماليه ","14"]
    ],
]

 Data2:string [] [] []=[
    [
        ["يدوية ","Manual ","1"],
        ["رياضيه ","Sports ","2"],
        ["موسيقية ","Musical ","3"],
        ["اجتماعية ","Social ","4"],
        ["إدارية ","Administrative ","5"],
        ["مكتبية ","Office ","6"]
    ],
    [
        ["رياضيات ","mathematics ","1"],
        ["علمية  ","Scientific  ","2"],
        ["فنية  ","Artistic  ","3"],
        ["تدريسية  ","Teaching  ","4"],
        ["تجارية  ","Commercial  ","5"],
        ["كتابية  ","In writing  ","6"]
    ]
]

formsResults:number[]=[]
forms2Results:number[][]=[]

formResult(result:number){

    this.formsResults.push(result)
}
form2Result(Result:number[]){
  this.forms2Results.push(Result)
}

totalResult(){

let sectionsValue:Sections={
    Realistic:this.formsResults[0]+this.formsResults[6]+this.formsResults[12]+this.forms2Results[0][0]+this.forms2Results[1][0],
    Investigative:this.formsResults[1]+this.formsResults[7]+this.formsResults[13]+this.forms2Results[0][1]+this.forms2Results[1][1],
    Artistic:this.formsResults[2]+this.formsResults[8]+this.formsResults[14]+this.forms2Results[0][2]+this.forms2Results[1][2],
    Social:this.formsResults[3]+this.formsResults[9]+this.formsResults[15]+this.forms2Results[0][3]+this.forms2Results[1][3],
    Enterprising:this.formsResults[4]+this.formsResults[10]+this.formsResults[16]+this.forms2Results[0][4]+this.forms2Results[1][4],
    Conventional:this.formsResults[5]+this.formsResults[11]+this.formsResults[17]+this.forms2Results[0][5]+this.forms2Results[1][5]
}
console.log(sectionsValue);

let total:number[]=[]
total.push(sectionsValue.Realistic)
total.push(sectionsValue.Investigative)
total.push(sectionsValue.Artistic)
total.push(sectionsValue.Social)
total.push(sectionsValue.Enterprising)
total.push(sectionsValue.Conventional)
console.log(total);

let one:number=0
let tow:number=0
let three:number=0

total.forEach((r)=>{
   if(r>one){
    one=r
    console.log(one);
    
   }else if(r<one && r>tow){
    tow=r
    console.log(tow);
    
   }else if(r<one && r<tow &&r>three){
    three=r
    console.log(three);
    
   }
})

Object.entries(sectionsValue).forEach(
    ([key, value]) => {
        if(value==one){
            this.first.push(key)
        }else if(value==tow){
            this.second.push(key)
        }else if(value==three){
            this.third.push(key)
        }
    }
);

console.log(this.first,this.second,this.third);
console.log("ok");


}

sendStudentResult(x:result){
 
    this.sendsturesult.sendResult(x).subscribe({
        next:(data)=>{
            localStorage.clear()
        }
    })
}

sendResult(){

    this.totalResult()

    let firstSection:string=""
    let secondSection:string=""
    let thirdSection:string=""


    this.first.forEach((x)=>{
      firstSection+=" "+x
    })
    this.second.forEach((x)=>{
        secondSection+=" "+x
      })
    this.third.forEach((x)=>{
        thirdSection+=" "+x
      })


      
    let top:top3srctions={
        firstSection:firstSection,
        secondSection:secondSection,
        thirdSection:thirdSection
    }

    let stuResult:result={
        highest:firstSection,
        second:secondSection,
        third:thirdSection,
        studentID:localStorage.getItem("userID")?.toString()!
    }
    
    this.finalData.finalResult$.next(top)
    this.route.navigateByUrl("results")
    this.sendStudentResult(stuResult)
}



}


