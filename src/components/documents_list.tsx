import { Card } from './card'
import { DocumentAddBtn } from './document_add_btn'
import { useStore } from 'effector-react'
import { $files, $loading, FileListGate } from '@models/files'
import { LoaderSpinner } from './loader_spinner'
import { $logged } from '@models/auth'
export const DocumentsList = () => {
  const filesList = useStore($files)
  const loadFiles = useStore($loading)
  const logged = useStore($logged)
  // const documentsList = [
  //   'Федеральный закон от 21 ноября 2011 г N 323 ФЗ Об основах охраны здоровья граждан',
  //   'Постановление Правительства РФ от 28 декабря 2020 г. N 2299 &quot;О Программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2021 год и на плановый период 2022 и 2023 годов&quot;',
  //   'Об утверждении территориальной программы государственных гарантий бесплатного оказания гражданам медицинской помощи в Курской области на 2020 год и на плановый период 2021 и 2022 годов',
  //   'Постановление Правительства РФ от 6 марта 2013 г. N 186 &quot;Об утверждении Правил оказания медицинской помощи иностранным гражданам на территории Российской Федерации&quot;',
  //   'Федеральный закон от 25 декабря 2008 г. N 273-ФЗ &quot;О противодействии коррупции&quot;',
  //   'Закон РФ от 15 мая 1991 г. N 1244-I &quot;О социальной защите граждан, подвергшихся воздействию радиации вследствие катастрофы на Чернобыльской АЭС&quot; (с изменениями и дополнениями)',
  //   'Закон РФ от 15 января 1993 г. N 4301-I &quot;О статусе Героев Советского Союза, Героев Российской Федерации и полных кавалеров ордена Славы&quot; (с изменениями и дополнениями)',
  //   'Федеральный закон от 20 июля 2012 г. N 125-ФЗ &quot;О донорстве крови и ее компонентов&quot; (с изменениями и дополнениями)',
  //   'Указ Президента РФ от 2 октября 1992 г. N 1157 "О дополнительных мерах государственной поддержки инвалидов" (с изменениями и дополнениями)',
  //   'Закон РФ от 15 мая 1991 г. N 1244-I "О социальной защите граждан, подвергшихся воздействию радиации вследствие катастрофы на Чернобыльской АЭС" (с изменениями и дополнениями)',
  // ]

  //masonry sm:masonry-sm md:masonry-md lg:masonry-lg
  return (
    <>
      {loadFiles ? (
        <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
          <LoaderSpinner />
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 mx-40 flex-1 gap-8 before:box-inherit after:box-inherit">
          {filesList.map(({ id, title, file }) => (
            <Card key={id} id={id} title={title} fileId={file} />
          ))}
          {logged && <DocumentAddBtn />}
        </div>
      )}

      <FileListGate />
    </>
  )
}
