const languages = [
    { label:"C#", icon :'csharp'},
    { label:"Angular", icon:'angular'},
    { label:"Vue", icon:'vue'},
    { label:"Node JS", icon:'nodejs'},
    { label:"Javascript", icon:'javascript'},
];

const databases = [
    { label:"SQL Server", icon :'sql_server'},
    { label:"Oracle", icon:'oracle'},
    { label:"Mongo DB", icon:'mongodb'},
    { label:"Cosmos DB", icon:'cosmosdb'},
    { label:"PostgreSQL", icon:'postgresql'},
    { label:"MySQL", icon:'mysql'},
];

const cloud = [
    { label:"Azure", icon :'azure'},
]


const frameworks = [
    { label:"Entity framework", icon :'ef'},
    { label:"EF Core", icon :'efcore'},
    { label:"ASP.NET MVC", icon :'aspnetmvc'},
    { label:"WPF", icon :'wpf'},
    { label:"NUnit", icon :'nunit'},
]

const cicd = [
    { label:"Devops", icon :'devops'},
    { label:"Bitbucket", icon :'bitbucket'},
    { label:"TFS", icon :'tfs'}, 
]



export const items = [
    { title : 'Programming languages', items:languages, align:'half-right'},
    { title : 'Databases', items:databases, align:'half-left'},
    { title : 'Cloud solutions', items:cloud, align:'half-right'},
    { title : 'Frameworks', items:frameworks, align:'half-left'},
    { title : 'CI/CD', items:cicd, align:'half-right'},
]

 

/*
 <img class="expertise" src="../assets/img/expertise/devops.png"/> 
              <img class="expertise" src="../assets/img/expertise/bitbucket.png"/> 
              <img class="expertise" src="../assets/img/expertise/tfs.png"/> 
*/