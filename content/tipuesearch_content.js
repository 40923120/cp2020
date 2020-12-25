var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'w8', 'text': '', 'tags': '', 'url': 'w8.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'HW1', 'text': '', 'tags': '', 'url': 'HW1.html'}, {'title': 'PCH5', 'text': '', 'tags': '', 'url': 'PCH5.html'}, {'title': '主板和組件', 'text': '\n 在本課程中，我們將介紹主板的用途和功能。我們還將介紹中央處理器（CPU）和為CPU提供專門功能的各種技術，例如虛擬化，超線程和多核處理器。最後，我們將介紹可用的各種CPU冷卻方法，例如主動和被動散熱器以及液體冷卻。 \n 主板是計算機的基礎。主板就像一個街區，公交車就像街道。這些組件就像城市中的建築物，因此，如果您要從一棟建築物轉到另一棟建築物（或者在我們的情況下，如果我們希望信息從一個組件流向另一組件），則它必須穿越公交車（街道） ）。總線是物理上將主板的各個組件彼此連接的總線，允許信息流入和流出各個計算機組件。主板有各種形狀，大小和佈局。主板的特定形狀，大小和佈局稱為其外形尺寸。主板是最重要的計算機組件之一，因為所有其他組件都可以插入主板，無論是插入專用插槽（例如CPU），擴展槽（用於各種擴展卡）還是連接器（例如SATA）存儲設備和音頻輸入/輸出）。主板確實是計算機中所有組件的主要集合點。 \n 擴展插槽可提供計算機系統的其他功能。擴展卡已插入擴展槽。主板上有許多不同類型的擴展插槽。這些類型的插槽中的每一種的功能將在以後的模塊中進行更詳細的討論。以下是最常見的擴展插槽類型的簡要概述。 \n PCI —傳統的外圍組件互連插槽，通常使用其縮寫詞來指代。 PCI-X — PCI插槽的更快的64位版本，以133 MHz的總線速度運行。 AGP —專用於獨立於共享PCI總線的圖形通道（總線）。這使得3D遊戲設計，硬件加速和視頻播放方面有了進步。 PCIe — PCI Express的速度超過了AGP的速度，並且PCIe為所有設備提供了單個插槽類型。 AMR —音頻調製解調器轉接卡是一種特殊類型的卡，用於將其他卡裝入緊湊的空間。 CNR —通信網絡轉接卡取代了AMR，並在轉接卡上支持六通道數字音頻，網絡功能和其他高質量的集成音頻支持。 芯片組 芯片組確定係統可以使用的CPU，系統提供的集成端口以及主板中包含的擴展插槽的類型。主板的尺寸決定了具體的尺寸，形狀和佈局，而芯片組則決定了將哪些技術集成到主板本身中。每個芯片組都定義了內存控制器，並指定了主板可以使用哪種RAM。這包括要使用的RAM的類型（DDR，DDR2，DDR3等）和RAM的速度（10600、1333 MHz等）。主板在技術上分為“北橋”和“南橋”，將在下一部分中進一步討論。該芯片組由製造商設計，如果不更換整個主板，最終用戶將無法升級或更改。因此，在購買滿足您需求的主板和芯片組之前，請務必謹慎選擇。 \n \n \n 在開始討論主板本身之前，我們希望對可以連接到主板的各種組件有基本的了解。 在以後的課程中，我們將詳細介紹這些組件中的每一個，但讓我們看一下主板上的一些關鍵組件。 \n \n 查看上面的主板圖，其中標識了特定的組件。 讓我們更仔細地檢查每個組件： \n \n \n \n 組件名稱 \n 功能 \n \n \n PCI擴充插槽 \n 這些使我們能夠為計算機添加功能，例如額外的USB端口，新的聲卡，調製解調器或網卡等。 這是一個通用卡插槽，所有製造商都可以在使用通用規範構建卡時使用。 \n \n \n PCIe x1（PCI Express大小1）插槽 \n 該特定的主板具有三個插槽，但是根據其特定的形狀因板而異。 這些是較新的插槽，比舊的PCI插槽快得多。 PCIe代表PCI Express，x1表示存在一個專用的串行數據連接（通道）。 PCIe具有多種尺寸，例如x1，x4，x8和x16。 \n \n \n PCIe x16（PCI Express尺寸16）插槽 \n 這些是較新的插槽，比舊的PCI插槽快得多。 PCIe代表PCI Express，x16表示有16個串行通道。 PCIe具有多種尺寸，例如x1，x4，x8和x16。 \n \n \n 後置輸入/輸出集群 \n 每個主板都可以提供專用的集成功能，例如網卡，聲卡，視頻卡以及各種輸入/輸出端口，這些功能都“聚集”在板上。 這些組件已焊接到主板上，因此無法更改。 \n \n \n CPU插槽 \n CPU插槽是插入中央處理器（計算機的大腦）的位置。 \n \n \n 內存插槽 \n 這些插槽是在其中插入額外的隨機存取存儲器（RAM）以便為計算機提供容量的位置。 \n \n \n 24針主電源連接器 \n 這個24針主電源連接器為整個主板供電。 \n \n \n \n \n', 'tags': '', 'url': '主板和組件.html'}, {'title': '擴展插槽', 'text': '\n 北橋 北橋有幾個名字。第一個也是最常見的是內存控制器中樞（MCH），但也可以稱為Intel主板上具有集成顯卡的圖形內存控制器中樞（GMCH）。北橋用作CPU和內存庫（RAM），PCIe x16，AGP圖形擴展插槽以及其他高速組件之間的連接。從本質上講，CPU的運行速度非常快（例如3 GHz或更高的速度），並且計算機周圍的各種組件無法以如此快的速度運行。北橋充當緩衝區，以保持高速設備向CPU提供信息。雖然內存可以在1至2 GHz範圍內運行，但它與CPU之間仍然存在延遲。北橋合併所有高速輸入，以最大程度地提高CPU的效率。 南橋 南橋被稱為輸入/輸出控制器集線器（ICH）。南橋用作CPU和計算機低速組件之間的連接。例如，與CPU相比，硬盤以非常慢的速度運行，但是來自用戶（來自鍵盤和鼠標）的輸入發生的速度甚至比硬盤慢。 ICH整合了來自大容量存儲設備，DVD / CD驅動器，硬盤驅動器，軟盤驅動器，USB端口，PCI擴展插槽，CMOS和端口群集的輸入/輸出的輸入，然後將該信息從南橋傳遞到北橋，然後到CPU進行處理。通過消除對南橋上較慢的組件的等待時間，並使CPU在空閒週期內處理其他數據，此過程可最大程度地提高CPU處理數據的能力的效率。 \n \n \n', 'tags': '', 'url': '擴展插槽.html'}]};