import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent implements OnInit {

  files = 
    [
        {
            "data":{
                "name":"Documents",
                "size":"75kb",
                "type":"Folder"
            },
            "children":[
                {
                    "data":{
                        "name":"Work",
                        "size":"55kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "data":{
                                "name":"Expenses.doc",
                                "size":"30kb",
                                "type":"Document"
                            }
                        },
                        {
                            "data":{
                                "name":"Resume.doc",
                                "size":"25kb",
                                "type":"Resume"
                            }
                        }
                    ]
                },
                {
                    "data":{
                        "name":"Home",
                        "size":"20kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "data":{
                                "name":"Invoices",
                                "size":"20kb",
                                "type":"Text"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "data":{
                "name":"Pictures",
                "size":"150kb",
                "type":"Folder"
            },
            "children":[
                {
                    "data":{
                        "name":"barcelona.jpg",
                        "size":"90kb",
                        "type":"Picture"
                    }
                },
                {
                    "data":{
                        "name":"primeui.png",
                        "size":"30kb",
                        "type":"Picture"
                    }
                },
                {
                    "data":{
                        "name":"optimus.jpg",
                        "size":"30kb",
                        "type":"Picture"
                    }
                }
            ]
        }
    ]

    constructor() {}

    ngOnInit() {
        
    }

}
